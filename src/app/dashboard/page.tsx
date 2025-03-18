import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-indigo-100 p-6 sm:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6 sm:space-y-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center sm:text-left">
            Dashboard
          </h1>
          <p className="text-lg text-gray-600 mt-3 sm:mt-0 text-center sm:text-left">
            Manage tasks, view analytics, and make adjustments.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Task Card */}
          <Link
            href="dashboard/tasks"
            className="bg-blue-100 hover:bg-blue-200 p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-800">Tasks</h2>
              <span className="text-2xl">📝</span>
            </div>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              View, organize, and manage your daily tasks.
            </p>
          </Link>

          {/* Analytics Card */}
          <Link
            href="dashboard/analytics"
            className="bg-green-100 hover:bg-green-200 p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-semibold text-green-800">Analytics</h2>
              <span className="text-2xl">📊</span>
            </div>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              Gain insight into your performance and trends.
            </p>
          </Link>

          {/* Settings Card */}
          <Link
            href="dashboard/settings"
            className="bg-purple-100 hover:bg-purple-200 p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-semibold text-purple-800">Settings</h2>
              <span className="text-2xl">⚙️</span>
            </div>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              Customize and tweak your dashboard settings.
            </p>
          </Link>

          {/* Users Card */}
          <Link
            href="dashboard/users"
            className="bg-yellow-100 hover:bg-yellow-200 p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-semibold text-yellow-800">Users</h2>
              <span className="text-2xl">👥</span>
            </div>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              View and manage your user base.
            </p>
          </Link>
        </div>

        {/* Go Back Button */}
        <div className="flex justify-center sm:justify-start">
          <Link href="/">
            <div className="mt-6 w-fit text-blue-500 border border-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition">
              Go Back
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
