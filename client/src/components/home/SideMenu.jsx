export default function SideMenu({ isOpen, onClose }) {
	return (
	  <div className={`fixed inset-0 z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
		<div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

		<div className={`absolute top-0 right-0 w-3/4 max-w-sm h-full bg-white transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
		  <div className="flex justify-between items-center p-4 border-b">
			<span className="text-lg font-medium text-purple-400">Connect</span>
			<button onClick={onClose} className="text-gray-500">
			  <svg
				className="h-6 w-6"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			  >
				<path
				  strokeLinecap="round"
				  strokeLinejoin="round"
				  strokeWidth={2}
				  d="M6 18L18 6M6 6l12 12"
				/>
			  </svg>
			</button>
		  </div>

		  <div className="p-4">
			<div className="relative mb-4">
			  <input
				type="text"
				placeholder="Search users..."
				className="w-full py-2 pl-10 pr-4 bg-gray-100 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
			  />
			  <svg
				className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			  >
				<path
				  strokeLinecap="round"
				  strokeLinejoin="round"
				  strokeWidth={2}
				  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			  </svg>
			</div>

			<nav className="flex flex-col space-y-4">
			  <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-purple-500">
				<svg
				  className="h-6 w-6"
				  xmlns="http://www.w3.org/2000/svg"
				  fill="none"
				  viewBox="0 0 24 24"
				  stroke="currentColor"
				>
				  <path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
				  />
				</svg>
				<span>Home</span>
			  </a>
			  <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-purple-500">
				<svg
				  className="h-6 w-6"
				  xmlns="http://www.w3.org/2000/svg"
				  fill="none"
				  viewBox="0 0 24 24"
				  stroke="currentColor"
				>
				  <path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 4v16m8-8H4"
				  />
				</svg>
				<span>Create</span>
			  </a>
			  <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-purple-500">
				<svg
				  className="h-6 w-6"
				  xmlns="http://www.w3.org/2000/svg"
				  fill="none"
				  viewBox="0 0 24 24"
				  stroke="currentColor"
				>
				  <path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
				  />
				</svg>
				<span>Profile</span>
			  </a>
			</nav>
		  </div>
		</div>
	  </div>
	);
  }