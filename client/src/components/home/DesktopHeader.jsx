import { useState } from "react";
import { LogOut } from "lucide-react";
import { logoutUser } from "../../utils/handleAuth";
import Feedback from '../Feedback'
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;


export default function DesktopHeader() {
	const navigate = useNavigate()
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState(null);

  const handleLogout = async () => {
    const response = await logoutUser(apiUrl);
    setSuccess(response.success);
    setMessage(response.message);

    setTimeout(() => {
      setSuccess(null);
      setMessage(null);
      if (response.success) {
        navigate("/")
      }
    }, 2000);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <a  onClick={navigate("/home")} className="text-purple-400 font-medium text-xl">
            Connect Social
          </a>
        </div>

        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
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
        </div>

        <div className="flex items-center space-x-6">
          <a onClick={navigate("/home")} className="text-gray-600 hover:text-purple-500">
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
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-500">
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
          </a>

          {/* LogOut Button */}
          <button onClick={handleLogout} className="text-gray-600 hover:text-purple-500">
            <LogOut size={24} />
          </button>
        </div>
      </div>

      {/* Feedback Component for Logout Message */}
      {success !== null && (
        <Feedback isSuccess={success} message={message} />
      )}
    </header>
  );
}
