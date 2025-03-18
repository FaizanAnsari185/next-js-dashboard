import Link from "next/link";
import React from "react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 p-4 sm:p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">Settings</h1>
        <p className="text-md sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl">
          Customize your account settings, Profile, and Notifications here.
          Choose an option from the sidebar to begin.
        </p>
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-12">
          <div className="w-full sm:w-1/4 bg-white rounded-lg p-4 sm:p-6 space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4">
              Quick Links
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              <li className="shadow-2xl rounded-lg">
                <Link
                  href="/dashboard/settings/account"
                  className="flex items-center text-md sm:text-lg text-gray-800 hover:text-indigo-600 transition-colors py-2 px-4 rounded-md hover:bg-indigo-50"
                >
                  <span>Account</span>
                </Link>
              </li>
              <li className="shadow-2xl rounded-lg">
                <Link
                  href="/dashboard/settings/notifications"
                  className="flex items-center text-md sm:text-lg text-gray-800 hover:text-yellow-600 transition-colors py-2 px-4 rounded-md hover:bg-yellow-50"
                >
                  <span>Notifications</span>
                </Link>
              </li>
              <li className="shadow-2xl rounded-lg">
                <Link
                  href="/dashboard/settings/profile"
                  className="flex items-center text-md sm:text-lg text-gray-800 hover:text-green-600 transition-colors py-2 px-4 rounded-md hover:bg-green-50"
                >
                  <span>Profile</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-white shadow-md rounded-lg p-4 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-600 max-w-3xl mb-4 sm:mb-6">
              Select a Setting
            </h2>
            <p className="text-md sm:text-lg text-gray-600 max-w-3xl">
              Choose an option from the sidebar to manage your account,
              notifications, or profile settings.
            </p>
          </div>
        </div>
        <Link href="/dashboard">
          <div className="mt-6 sm:mt-8 w-fit text-blue-500 border border-blue-500 py-2 px-4 sm:px-6 rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer">
            Go Back
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Settings;