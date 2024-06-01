import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 text-gray-800 p-4">
      <div className="flex items-center mb-4">
        <MdErrorOutline className="text-red-500 text-9xl" />
        <h1 className="text-9xl font-bold ml-4">404</h1>
      </div>
      <h2 className="text-2xl font-semibold mb-6">Oops! Page Not Found</h2>
      <p className="text-lg mb-8 text-gray-600 text-center max-w-md">
        Sorry, the page you're looking for doesn't exist. If you think something
        is broken, report a problem.
      </p>
      <Link
        to="/"
        className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300"
      >
        <FaHome className="mr-2" />
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
