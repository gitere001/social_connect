import { useState } from "react";
import { LogOut } from "lucide-react";
import { logoutUser } from "../../utils/handleAuth"; // Assuming you have a utility to handle logout
import Feedback from "../Feedback";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

export default function MobileHeader() {
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

        navigate("/");
      }
    }, 2000);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="px-4 py-3 flex items-center justify-between">
        <div>
          <a

            onClick={() => navigate("/home")}
            className="text-purple-400 font-medium text-xl cursor-pointer"
          >
            Connect
          </a>
        </div>

        <button
          onClick={handleLogout}
          className="text-gray-700 cursor-pointer"
        >
          <LogOut size={24} />
        </button>
      </div>

      {/* Feedback Component for Logout Message */}
      {success !== null && (
        <Feedback isSuccess={success} message={message} />
      )}
    </header>
  );
}
