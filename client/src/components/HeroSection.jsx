export default function HeroSection({ currentView }) {
	return (
	  <div className="w-full md:w-1/2 md:pr-8">
		<h1 className="text-3xl md:text-4xl font-bold">
		  {currentView === 'register' ? (
			<>Join <span className="text-purple-400">Connect Social</span></>
		  ) : (
			<>Welcome back to <span className="text-purple-400">Connect Social</span></>
		  )}
		</h1>

		<p className="mt-4 text-gray-600 text-lg">
		  {currentView === 'register' ? (
			"Create an account to connect with friends, share moments, and discover content from people around the world."
		  ) : (
			"Log in to see updates from your friends, share moments, and connect with people around the world."
		  )}
		</p>
	  </div>
	);
  }