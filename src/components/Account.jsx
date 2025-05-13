import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCircle } from "lucide-react";

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const storedUser = localStorage.getItem("popxUser");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (storedUser && isLoggedIn === "true") {
      const parsedUser = JSON.parse(storedUser);
      setUser({
        name: parsedUser.fullName || "N/A",
        email: parsedUser.email || "N/A",
      });
    } else {
      navigate("/login"); 
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className=" bg-gray-100  shadow-md rounded-lg w-full max-w-sm pb-8 h-[600px] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-white flex justify-between rounded-lg items-center">
          <h2 className="text-gray-800 font-medium text-lg">
            Account Settings
          </h2>
          {/* Logout Button */}
          <button
            onClick={() => {
              localStorage.setItem("isLoggedIn", "false");
              navigate("/");
            }}
            className=" text-sm text-white rounded-2xl px-3 py-1 bg-red-600 hover:underline self-start"
          >
            Logout
          </button>
        </div>

        {/* User Info */}
        <div className="flex items-start gap-4 pl-8 pr-8 pt-4 bg-gray-100 ">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
            <UserCircle className="text-purple-600 w-10 h-10" />
          </div>

          {/* Text Info */}
          <div className="flex flex-col ">
            <h3 className="font-medium text-gray-800">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.email}</p>
            
          </div>
          
        </div>
        <p className=" mt-3 text-sm font-semibold text-gray-600 pl-8 pr-4">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
      </div>
    </div>
  );
};

export default Account;
