import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="sm:min-h-screen sm:bg-gray-50 bg-[#F7F8F9] flex items-center justify-center">
      <div className="bg-[#F7F8F9] sm:shadow-md sm:rounded-lg w-full h-screen sm:w-[375px] sm:h-[700px] max-w-sm sm:p-8 px-5 sm:flex sm:flex-col">
        
        {/* Header */}
        <div className="mb-[29px] mt-[530px] sm:mt-auto pr-[104px] sm:pr-0">
          <h1 className="text-[28px] font-bold text-[#1D2226] mb-2.5">
            Welcome to PopX
          </h1>
          <p className="text-gray-500 text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <Link
            to="/signup"
            className="bg-[#6C25FF] text-white py-[13px] text-center rounded font-bold hover:bg-[#4625ff] transition"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="bg-[#6C25FF4B] text-[#1D2226] py-[13px] text-center rounded font-bold hover:bg-purple-200 transition"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
