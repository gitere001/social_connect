import { useState } from 'react';
import FormInput from './FormInput';
import Feedback from './Feedback';
import { loginUser } from '../utils/handleAuth';
import { useNavigate } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;


export default function LoginForm({ setCurrentView }) {
  const [email, setEmail] = useState('giterejames10@gmail.com');
  const [password, setPassword] = useState('111111111');
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser({ email, password }, apiUrl);

    setSuccess(response.success);
    setMessage(response.message);

    setTimeout(() => {
      setSuccess(null);
      setMessage(null);

      if (response.success) {
        // Clear inputs or redirect if needed
        setEmail('');
        setPassword('');
        navigate("/home")
      }
    }, 2000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {success !== null && (
        <Feedback isSuccess={success} message={message} />
      )}

      <h2 className="text-2xl font-bold mb-1">Login</h2>
      <p className="text-gray-500 text-sm mb-6">Enter your credentials to access your account</p>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <label className="block text-sm font-medium">
              Password
            </label>
            <a href="#" className="text-purple-400 text-sm hover:underline">
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-1.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-600 transition-colors mt-2"
        >
          Sign in
        </button>
      </form>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => setCurrentView('register')}
            className="text-purple-500 hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
