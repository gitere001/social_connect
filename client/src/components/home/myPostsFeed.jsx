import { fetchUsersPost } from "../../utils/handelPost";
import { useEffect, useState } from "react";
import UserPost from "./UserPost";
const apiUrl = import.meta.env.VITE_API_URL;


export default function UsersFeed() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserPosts = async () => {
      const result = await fetchUsersPost(apiUrl);


      if (result.success) {
        setPosts(result.posts);
      } else {
        setError(result.message);
      }
    };

    getUserPosts();
  }, []);
  console.log(posts);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-4">
      {posts.length > 0 ? (
        posts.map((post) => <UserPost key={post.id} post={post} />)
      ) : (
        <div>No posts yet.</div>
      )}
    </div>
  );
}
