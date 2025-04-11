import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

import Post from "./Post";
import { fetchOtherUsersPost } from "../../utils/handelPost";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const generateAvatar = (username) => {
    const initial = username?.charAt(0).toUpperCase() || "U";
    const colors = ["bg-purple-400", "bg-pink-400", "bg-yellow-400", "bg-blue-400"];
    const color = colors[username?.length % colors.length];
    return { initial, color };
  };

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchOtherUsersPost(apiUrl);
      if (response.success) {
        const enrichedPosts = response.posts.map((post) => {
          const { initial, color } = generateAvatar(post.User.username);
          return {
            id: post.id,
            user: {
              name: post.User.username,
              avatar: initial,
              color,
            },
            content: post.content,
            timeAgo: new Date(post.createdAt).toLocaleString(), // You can enhance with time-ago library later
            likes: post.Like?.length || 0,
            comments: 0, // Placeholder for now
          };
        });
        setPosts(enrichedPosts);
      }
      setLoading(false);
    };

    getPosts();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading feed...</p>;

  return (
    <div className="space-y-4">
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts to show yet.</p>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
}
