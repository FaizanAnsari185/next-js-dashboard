import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-lg md:max-w-4xl mx-auto bg-white rounded-lg p-6 md:p-8 shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
          Notifications
        </h1>

        {/* Notifications Settings Sections */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
            Notification Preferences
          </h2>

          <div className="space-y-4">
            {["Email", "SMS", "Push"].map((type) => (
              <div key={type}>
                <label className="block text-sm font-medium text-gray-600">
                  {type} Notifications
                </label>
                <select className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Enable</option>
                  <option>Disable</option>
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Actions Settings */}
        <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-4">
          <button className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors w-full md:w-auto">
            Cancel
          </button>
          <button className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto">
            Save Changes
          </button>
        </div>

        {/* Back Link */}
        <Link href="/dashboard/settings">
          <div className="mt-6 w-full md:w-fit mx-auto md:mx-0 text-blue-500 border border-blue-500 py-2 px-3 rounded-lg hover:bg-blue-500 hover:text-white text-center">
            Go Back
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Notifications;
