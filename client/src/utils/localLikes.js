// src/utils/localLikes.js

export const getLikedPosts = () => {
	const liked = localStorage.getItem('likedPosts');
	return liked ? JSON.parse(liked) : [];
  };

  export const addLikedPost = (postId) => {
	const liked = getLikedPosts();
	if (!liked.includes(postId)) {
	  liked.push(postId);
	  localStorage.setItem('likedPosts', JSON.stringify(liked));
	}
  };

  export const removeLikedPost = (postId) => {
	const liked = getLikedPosts().filter(id => id !== postId);
	localStorage.setItem('likedPosts', JSON.stringify(liked));
  };

  export const isPostLiked = (postId) => {
	const liked = getLikedPosts();
	return liked.includes(postId);
  };
