import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    form.fullName.trim() &&
    form.phone.trim() &&
    isEmailValid(form.email) &&
    form.password.trim();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = () => {
    if (!isFormValid) {
      alert("Please fill all required fields with valid data.");
      return;
    }

    localStorage.setItem("popxUser", JSON.stringify(form));
    localStorage.setItem("isLoggedIn", "true");
    navigate("/account");
  };

  return (
    <div className="min-h-screen sm:bg-gray-50 bg-[#F7F8F9] flex items-center justify-center">
      <div className="bg-[#F7F8F9] sm:shadow-md w-full h-screen sm:w-[375px] sm:h-[700px] max-w-sm sm:p-8 px-5 flex flex-col justify-between">

        {/* Header */}
        <div>
          <div className="mb-8 mt-10 sm:mt-0">
            <h2 className="text-[28px] font-bold text-gray-800  mr-[147px] sm:mr-0">
              Create your PopX account
            </h2>
          </div>

          {/* Input Fields */}
          <div className="flex flex-col gap-[29px]">
            {[
              { name: "fullName", label: "Full Name*", type: "text" },
              { name: "phone", label: "Phone number*", type: "tel" },
              { name: "email", label: "Email address*", type: "email" },
              { name: "password", label: "Password*", type: "password" },
              { name: "company", label: "Company name", type: "text" },
            ].map(({ name, label, type }) => (
              <div key={name} className="relative">
                <span className="absolute -top-2 left-3  bg-[#F7F8F9] px-1 text-xs text-[#6C25FF] font-medium">
                  {label}
                </span>
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={`Enter ${label.toLowerCase().replace("*", "")}`}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 pt-4 text-sm outline-none focus:ring-1 focus:ring-purple-600"
                />
              </div>
            ))}
          </div>
          {/* Radio Buttons */}
          <div className="mt-[18px] ">
            <span className="text-xs text-[#1D2226] font-medium mb-1 block">
              Are you an Agency? <span className="text-red-700">*</span>
            </span>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={form.isAgency === "yes"}
                  onChange={handleChange}
                  className="accent-[#6C25FF]"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={form.isAgency === "no"}
                  onChange={handleChange}
                  className="accent-[#6C25FF]"
                />
                No
              </label>
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <button
          onClick={handleSignup}
          disabled={!isFormValid}
          className={`sm:mt-6 mb-[80px] py-3 rounded font-semibold transition ${
            isFormValid
              ? "bg-[#6C25FF] text-white hover:bg-[#4225ff] cursor-pointer"
              : "bg-gray-300 text-white cursor-not-allowed"
          }`}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignUp;
