import Link from "next/link";
import React from "react";

const UserDetails = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    activities: [
      { id: 1, description: "Updated password", timestamp: "02-02-2025" },
      { id: 2, description: "Changed email address", timestamp: "10-01-2025" },
      {
        id: 3,
        description: "Logged in from a new device",
        timestamp: "15-03-2025",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-lg md:max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 md:p-8">
        {/* User Info Section */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="h-24 w-24 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
          />

          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.role}</p>
            <p
              className={`text-sm mt-2 ${
                user.status === "Active" ? "text-green-500" : "text-red-500"
              }`}
            >
              Status: {user.status}
            </p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">About</h2>
          <p className="text-gray-600">{user.bio}</p>
        </div>

        {/* Activities Timeline */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
            Recent Activities
          </h2>
          <ul className="space-y-4">
            {user.activities.map((activity) => (
              <li key={activity.id} className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white font-semibold text-lg rounded-full w-10 h-10 flex items-center justify-center">
                  {activity.description.charAt(0)}
                </div>

                <div>
                  <p className="text-gray-700">{activity.description}</p>
                  <p className="text-sm text-gray-500">{activity.timestamp}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-4">
          <button className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors w-full md:w-auto">
            Cancel
          </button>
          <button className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto">
            Save Changes
          </button>
        </div>

        {/* Back Link */}
        <Link href="/dashboard/users">
          <div className="mt-6 w-full md:w-fit mx-auto md:mx-0 text-blue-500 border border-blue-500 py-2 px-3 rounded-lg hover:bg-blue-500 hover:text-white text-center">
            Go Back
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;
