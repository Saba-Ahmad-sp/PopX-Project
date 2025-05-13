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
    <div className="min-h-screen sm:bg-gray-50 bg-[#F7F8F9] flex items-center justify-center">
      <div className="bg-[#F7F8F9] sm:shadow-md sm:rounded-lg w-full h-screen sm:w-[375px] sm:h-[700px] max-w-sm px-0 flex flex-col">
        {/* Header */}
        <div className="pt-[27px] pb-[19px] px-[15px] bg-white flex justify-between sm:rounded-lg items-center">
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
        <div className="flex items-center gap-5 pl-[20px] pr-8 py-[30px] bg-[#F7F8F9]  ">
          <div className="w-[76px] h-[76px] rounded-full bg-purple-100 flex items-center justify-center">
            <UserCircle className="text-purple-600 w-[76px] h-[76px]" />
          </div>

          <div className="flex flex-col ">
            <h3 className=" text-[#1D2226] font-bold">{user.name}</h3>
            <p className="text-sm font-semibold text-gray-500">{user.email}</p>
          </div>
        </div>
        <p className=" mt-3 text-sm font-semibold text-gray-600 pl-[20px] pr-[18px] pb-[20px] border-b-2 border-dashed border-[#CBCBCB]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Account;
