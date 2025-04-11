export default function TabNavigation({ activeTab, setActiveTab }) {
	return (
	  <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
		<button
		  onClick={() => setActiveTab('following')}
		  className={`flex-1 py-3 text-center ${
			activeTab === 'following'
			  ? 'font-medium text-black bg-white'
			  : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
		  }`}
		>
		  Feeds
		</button>
		<button
		  onClick={() => setActiveTab('myPosts')}
		  className={`flex-1 py-3 text-center ${
			activeTab === 'myPosts'
			  ? 'font-medium text-black bg-white'
			  : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
		  }`}
		>
		  My posts
		</button>
	  </div>
	);
  }