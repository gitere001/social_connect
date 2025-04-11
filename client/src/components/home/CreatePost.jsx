import { useState } from "react";
import Feedback from '../Feedback'
const apiUrl = import.meta.env.VITE_API_URL;

import { createPost } from "../../utils/handelPost";


export default function CreatePost() {
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePost = async () => {
    if (!content.trim()) {
      setSuccess(false);
      setMessage("Post content cannot be empty");
      return;
    }

    setLoading(true);
    const response = await createPost({ content }, apiUrl);

    setSuccess(response.success);
    setMessage(response.message);

    if (response.success) {
      setContent("");
    }

    setTimeout(() => {
      setSuccess(null);
      setMessage(null);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {success !== null && (
        <div className="p-4 pt-3">
          <Feedback isSuccess={success} message={message} />
        </div>
      )}

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Create a post</h2>
        <textarea
          placeholder="What's on your mind?"
          className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none"
          rows="3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>

      <div className="px-4 py-3 border-t border-gray-100 flex justify-end">
        <button
          onClick={handlePost}
          disabled={loading}
          className={`bg-purple-400 hover:bg-purple-500 text-white px-6 py-2 rounded-full transition-colors ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </div>
    </div>
  );
}
