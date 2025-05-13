import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = () => {
    if (!isEmailValid(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const storedUser = localStorage.getItem('popxUser');
    if (!storedUser) {
      alert('No user found. Please create an account.');
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    if (parsedUser.email === email && parsedUser.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/account');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg w-full max-w-sm p-8 h-[600px] flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Signin to your PopX account</h2>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <div className="relative">
            <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600 font-medium">
              Email Address
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-md py-2 px-3 pt-4 text-sm outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>

          <div className="relative">
            <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600 font-medium">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 pt-4 text-sm outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          disabled={!isFormValid}
          className={`mt-auto py-3 rounded font-semibold transition ${
            isFormValid
              ? 'bg-purple-600 text-white hover:bg-purple-700 cursor-pointer'
              : 'bg-gray-300 text-white cursor-not-allowed'
          }`}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
