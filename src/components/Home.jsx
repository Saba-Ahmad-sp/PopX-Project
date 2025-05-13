import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg w-375px max-w-sm p-8 flex flex-col justify-end h-[600px]">
        <div className="mb-8 mt-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to PopX</h1>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            to="/signup"
            className="bg-purple-600 text-white py-3 text-center rounded font-semibold hover:bg-purple-700 transition"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="bg-purple-100 text-purple-700 py-3 text-center rounded font-semibold hover:bg-purple-200 transition"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
