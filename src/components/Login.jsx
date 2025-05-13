import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = () => {
    if (!isEmailValid(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const storedUser = localStorage.getItem("popxUser");
    if (!storedUser) {
      alert("No user found. Please create an account.");
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    if (parsedUser.email === email && parsedUser.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/account");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen sm:bg-gray-50 bg-[#F7F8F9] flex items-center justify-center">
      <div className="bg-[#F7F8F9] sm:shadow-md sm:rounded-lg w-full h-screen sm:w-[375px] sm:h-[700px] max-w-sm sm:p-8 px-5 flex flex-col">
        
        {/* Header */}
        <div className="mb-[33px] mt-10 sm:mt-0">
          <h2 className="text-[28px] font-bold text-gray-800 mb-3.5 mr-[147px] sm:mr-0">
            Signin to your PopX account
          </h2>
          <p className="text-gray-500 text-sm text-[18px] mr-[103px] sm:mr-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-6">
          <div className="relative">
            <span className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-xs text-[#6C25FF] font-medium">
              Email Address
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-md py-2 px-3 pt-4 text-sm outline-none focus:ring-1 focus:ring-[#6C25FF]"
            />
          </div>

          <div className="relative">
            <span className="absolute -top-2 left-3 bg-[#F7F8F9] px-1 text-xs text-[#6C25FF] font-medium">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 pt-4 text-sm outline-none focus:ring-1 focus:ring-[#6C25FF]"
            />
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          disabled={!isFormValid}
          className={`mt-3.5 py-3 rounded font-semibold transition ${
            isFormValid
              ? "bg-[#6C25FF] text-white hover:bg-[#3b25ff] cursor-pointer"
              : "bg-gray-300 text-white cursor-not-allowed"
          }`}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
