export default function Navbar({ currentView, setCurrentView }) {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-purple-400 font-medium text-xl">
          Connect Social
        </a>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentView("login")}
            className={`px-4 py-2 rounded-md ${
              currentView === "login"
                ? "bg-purple-100 text-black"
                : "text-black hover:bg-gray-100"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setCurrentView("register")}
            className={`px-4 py-2 rounded-md ${
              currentView === "register"
                ? "bg-purple-500 text-white"
                : "bg-purple-500 text-white hover:bg-purple-600"
            }`}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
