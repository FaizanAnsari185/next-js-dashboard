import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="p-10 bg-white/10 backdrop-blur-lg rounded-3xl shadow-lg text-center">
        <h1 className="p-4 text-6xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Sorry, This Page Does Not Exist!
        </h1>
        <p className="text-gray-300 my-4 text-lg">
          The page you are looking for might have been removed or does not exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-all rounded-lg"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
