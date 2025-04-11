import { useState, useEffect } from 'react';

export default function Post({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  

  // Check localStorage on component mount for likes and follows
  useEffect(() => {
    // Handle likes
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    const hasLiked = likedPosts.includes(post.id);

    // Edge case: If post shows 0 likes but is marked as liked in localStorage
    if (post.likes === 0 && hasLiked) {
      // Remove from localStorage to maintain consistency
      const updatedLikedPosts = likedPosts.filter(id => id !== post.id);
      localStorage.setItem('likedPosts', JSON.stringify(updatedLikedPosts));
      setIsLiked(false);
    } else {
      setIsLiked(hasLiked);
    }

    // Handle follows - check localStorage on mount to maintain follow state
    const followedUsers = JSON.parse(localStorage.getItem('followedUsers') || '[]');
    const isUserFollowed = followedUsers.includes(post.user.id);
    setIsFollowing(isUserFollowed);
  }, [post.id, post.likes, post.user.id]);

  const handleLikeToggle = () => {
    // Get current liked posts from localStorage
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');

    if (isLiked) {
      // Unlike: Remove post ID from localStorage and decrease count
      const updatedLikedPosts = likedPosts.filter(id => id !== post.id);
      localStorage.setItem('likedPosts', JSON.stringify(updatedLikedPosts));
      setLikesCount(prev => Math.max(0, prev - 1)); // Prevent negative counts
    } else {
      // Like: Add post ID to localStorage and increase count
      likedPosts.push(post.id);
      localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
      setLikesCount(prev => prev + 1);
    }

    // Toggle the liked state
    setIsLiked(!isLiked);
  };

  const handleFollowToggle = () => {
    // Get current followed users from localStorage
    const followedUsers = JSON.parse(localStorage.getItem('followedUsers') || '[]');

    if (isFollowing) {
      // Unfollow: Remove user ID from localStorage
      const updatedFollowedUsers = followedUsers.filter(id => id !== post.user.id);
      localStorage.setItem('followedUsers', JSON.stringify(updatedFollowedUsers));
    } else {
      // Follow: Add user ID to localStorage
      followedUsers.push(post.user.id);
      localStorage.setItem('followedUsers', JSON.stringify(followedUsers));
    }

    // Toggle the following state
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className={`${post.user.color} text-white w-10 h-10 rounded-full flex items-center justify-center font-medium`}>
            {post.user.avatar}
          </div>
          <span className="ml-3 font-medium">{post.user.name}</span>
        </div>
        <button
          onClick={handleFollowToggle}
          className={`text-sm px-3 py-1 rounded-full transition-all ${
            isFollowing
              ? 'bg-purple-600 text-white border border-purple-600 hover:bg-purple-700'
              : 'text-purple-600 border border-purple-500 hover:bg-purple-100'
          }`}
        >
          {isFollowing ? 'Following' : '+ Follow'}
        </button>
      </div>

      <div className="px-4 py-3">
        <p className="whitespace-pre-line">{post.content}</p>
      </div>

      <div className="px-4 py-3 border-t border-gray-100 flex justify-between">
        <button
          onClick={handleLikeToggle}
          className="cursor-pointer flex items-center hover:text-purple-500"
          aria-label={isLiked ? "Unlike" : "Like"}
        >
          <svg
            className={`h-5 w-5 mr-1 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill={isLiked ? "currentColor" : "none"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span className={isLiked ? "text-red-500" : "text-gray-600"}>{likesCount} likes</span>
        </button>

        <button className="flex items-center text-gray-600 hover:text-purple-500">
          <svg
            className="h-5 w-5 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span>{post.comments} comments</span>
        </button>

        <button className="flex items-center text-gray-600 hover:text-purple-500">
          <svg
            className="h-5 w-5 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}