import { useState, useEffect } from 'react';
import FormInput from './FormInput';
import { registerUser } from '../utils/handleAuth';
import Feedback from './Feedback';
const apiUrl = import.meta.env.VITE_API_URL;

export default function RegisterForm({ setCurrentView }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (success !== null && message) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, [success, message]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setSuccess(false);
      setMessage('Passwords do not match.');
      return;
    }

    const formdata = {
      username,
      email,
      password,
    };

    const response = await registerUser(formdata, apiUrl);

    setSuccess(response.success);
    setMessage(response.message);

    setTimeout(() => {
      setSuccess(null);
      setMessage(null);

      if (response.success) {
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setCurrentView('login');
      }
    }, 2000);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      {success !== null && <Feedback isSuccess={success} message={message} />}

      <h2 className="text-2xl font-bold mb-1">Create an account</h2>
      <p className="text-gray-500 text-sm mb-6">
        Enter your information to create an account
      </p>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Username"
          type="text"
          placeholder="johndoe"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <FormInput
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-600 transition-colors mt-2"
        >
          Create account
        </button>
      </form>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <button
            onClick={() => setCurrentView('login')}
            className="text-purple-500 hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
