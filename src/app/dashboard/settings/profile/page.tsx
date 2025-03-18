import Link from "next/link";
import React from "react";

const ProfileSettings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-lg md:max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
          Profile Settings
        </h1>

        {/* Profile Picture Settings */}
        <section className="mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
            Profile Picture
          </h2>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-24 h-24 rounded-full bg-gray-300">
              <img
                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto">
              Change Picture
            </button>
          </div>
        </section>

        {/* Profile Information Sections */}
        <section className="mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
            Profile Information
          </h2>

          <div className="space-y-4">
            {[
              { label: "Full Name", value: "John Doe" },
              { label: "Username", value: "john_doe" },
              { label: "Email Address", value: "john_doe@example.com" },
            ].map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-600">
                  {field.label}
                </label>
                <input
                  type="text"
                  defaultValue={field.value}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
        </section>

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

export default ProfileSettings;
