export default function UserPost({ post }) {
	console.log(post);

	return (
	  <div className="bg-white rounded-lg shadow-sm mb-4">
		<div className="p-4">
		  <div className="flex justify-between items-center">
			<div className="flex items-center">
			  <span className="font-medium">{post.User.username}</span>
			</div>
			<span className="text-sm text-gray-500">
			  {new Date(post.createdAt).toLocaleString()}
			</span>
		  </div>
		  <p className="whitespace-pre-line mt-3">{post.content}</p>
		</div>

		<div className="px-4 py-3 border-t border-gray-100 flex justify-between">
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
				d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
			  />
			</svg>
			<span>{post.Like.length} likes</span>
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
			<span>{post.comments?.length || 0} comments</span>
		  </button>
		</div>
	  </div>
	);
  }
