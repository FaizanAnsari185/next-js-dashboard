import Link from 'next/link'
import React from 'react'

const AccountSettings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 p-6 md:p-10 flex items-center justify-center">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg md:max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 text-center md:text-left">Account Settings</h2>

        {/* Profile Information */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Profile Information</h3>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              placeholder="john_doe@gmail.com"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Security Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Security</h3>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-4 mt-6">
          <button className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors w-full md:w-auto">
            Cancel
          </button>
          <button className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto">
            Save Changes
          </button>
        </div>

        {/* Back Link */}
        <Link href="/dashboard/settings">
          <div className="mt-8 mx-auto md:mx-0 w-fit text-blue-500 border border-blue-500 py-2 px-3 rounded-lg hover:bg-blue-500 hover:text-white text-center">
            Go Back
          </div>
        </Link>
      </div>
    </div>
  )
}

export default AccountSettings
