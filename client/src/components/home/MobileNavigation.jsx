import { useState } from "react";
import { LogOut } from "lucide-react";

import Feedback from "../Feedback";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../utils/handleAuth";
const apiUrl = import.meta.env.VITE_API_URL;

export default function MobileNavigation() {
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await logoutUser(apiUrl);
    setSuccess(response.success);
    setMessage(response.message);

    setTimeout(() => {
      setSuccess(null);
      setMessage(null);
      if (response.success) {
        // Redirect to the login page after successful logout
        navigate("/"); // Use navigate instead of window.location.href for react-router
      }
    }, 2000);
  };

  const handleNavigateHome = () => {
    navigate("/home");
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top smoothly
  };

  return (
    <div className="flex justify-around py-3">
      {success !== null && <Feedback isSuccess={success} message={message} />}
      <i
        onClick={handleNavigateHome}
        className="flex flex-col items-center text-purple-500 cursor-pointer"
      >
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
        <span className="text-xs mt-1">Home</span>
      </i>

      <button
        onClick={() => navigate("/create")}
        className="flex flex-col items-center text-gray-500 hover:text-purple-500"
      >
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
        <span className="text-xs mt-1">Create</span>
      </button>

      {/* LogOut Button */}
      <button
        onClick={handleLogout}
        className="text-gray-500 hover:text-purple-500"
      >
        <LogOut size={24} />
      </button>
    </div>
  );
}
