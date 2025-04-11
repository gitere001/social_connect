const prisma = require('../config/prismaConfig.js');

const createPost = async (req, res) => {
  const { content } = req.body;

  // Check if user is authenticated
  if (!req.session.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const newPost = await prisma.post.create({
      data: {
        content,
        userId: req.session.user.id,
      },
    });

    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

const fetchUserPosts = async (req, res) => {
	if (!req.session.user) {
	  return res.status(401).json({ message: 'Unauthorized' });
	}

	try {
	  const posts = await prisma.post.findMany({
		where: {
		  userId: req.session.user.id,
		},
		orderBy: {
		  createdAt: 'desc',
		},
		include: {
		  User: {
			select: {
			  id: true,
			  username: true,
			  email: true,
			},
		  },
		  Like: true,
		},
	  });

	  res.json({ posts });
	} catch (error) {
	  console.error("Error fetching user posts:", error);
	  res.status(500).json({ message: 'Something went wrong', error });
	}
  };


  const fetchOtherUsersPosts = async (req, res) => {
	if (!req.session.user) {
	  return res.status(401).json({ message: 'Unauthorized' });
	}

	try {
	  const posts = await prisma.post.findMany({
		where: {
		  userId: {
			not: req.session.user.id, // Exclude current user
		  },
		},
		orderBy: {
		  createdAt: 'desc',
		},
		include: {
		  User: {
			select: {
			  id: true,
			  username: true,
			  email: true,
			},
		  },
		  Like: true,
		},
	  });

	  res.json({ success: true, posts });
	} catch (error) {
	  console.error("Error fetching other users' posts:", error);
	  res.status(500).json({ success: false, message: 'Something went wrong', error });
	}
  };
  const likePost = async (req, res) => {
	// Use session-based authentication
	const user = req.session.user;
	const { postId } = req.params;

	if (!user) {
	  return res.status(401).json({ message: 'Unauthorized' });
	}

	try {
	  // Check if the user already liked this post
	  const existingLike = await prisma.like.findUnique({
		where: {
		  userId_postId: {
			userId: user.id,
			postId: Number(postId),
		  },
		},
	  });

	  if (existingLike) {
		return res.status(400).json({ message: 'Already liked' });
	  }

	  // Create the like
	  const newLike = await prisma.like.create({
		data: {
		  userId: user.id,
		  postId: Number(postId),
		},
	  });

	  res.status(201).json({ message: 'Post liked', like: newLike });
	} catch (err) {
	  console.error("Error liking post:", err);
	  res.status(500).json({ message: 'Something went wrong', error: err.message });
	}
  };

  const unlikePost = async (req, res) => {
	const user = req.session.user;
	const { postId } = req.params;

	if (!user) {
	  return res.status(401).json({ message: 'Unauthorized' });
	}

	try {
	  await prisma.like.delete({
		where: {
		  userId_postId: {
			userId: user.id,
			postId: Number(postId),
		  },
		},
	  });

	  res.status(200).json({ message: 'Post unliked successfully' });
	} catch (err) {
	  console.error('Error unliking post:', err);
	  res.status(500).json({ message: 'Something went wrong', error: err.message });
	}
  };




module.exports = { createPost, fetchUserPosts, fetchOtherUsersPosts, likePost, unlikePost };
