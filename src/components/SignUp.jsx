import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();
    const [form, setForm] = useState({
      fullName: '',
      phone: '',
      email: '',
      password: '',
      company: '',
      isAgency: 'yes',
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
      if (!isEmailValid(form.email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      localStorage.setItem('popxUser', JSON.stringify(form));
      navigate('/account');
    };
  
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg w-full max-w-sm p-8 flex flex-col">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Create your PopX account</h2>
          </div>
  
          {/* Input Fields with floating spans like login */}
          <div className="flex flex-col gap-4">
            {[
              { name: 'fullName', label: 'Full Name*', type: 'text' },
              { name: 'phone', label: 'Phone number*', type: 'tel' },
              { name: 'email', label: 'Email address*', type: 'email' },
              { name: 'password', label: 'Password*', type: 'password' },
              { name: 'company', label: 'Company name', type: 'text' },
            ].map(({ name, label, type }) => (
              <div key={name} className="relative">
                <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600 font-medium">
                  {label}
                </span>
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={`Enter ${label.toLowerCase().replace('*', '')}`}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 pt-4 text-sm outline-none focus:ring-1 focus:ring-purple-600"
                />
              </div>
            ))}
  
            {/* Radio Buttons */}
            <div className="mt-2">
              <span className="text-xs text-purple-600 font-medium mb-1 block">
                Are you an Agency?*
              </span>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={form.isAgency === 'yes'}
                    onChange={handleChange}
                    className="accent-purple-600"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={form.isAgency === 'no'}
                    onChange={handleChange}
                    className="accent-purple-600"
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
            className={`mt-6 py-3 rounded font-semibold transition ${
              isFormValid
                ? 'bg-purple-600 text-white hover:bg-purple-700 cursor-pointer'
                : 'bg-gray-300 text-white cursor-not-allowed'
            }`}
          >
            Create Account
          </button>
        </div>
      </div>
    );
  }
  
  export default SignUp;
  