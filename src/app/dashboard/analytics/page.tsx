import Link from "next/link";
import React from "react";

const Analytics = () => {
  const metrics = [
    { title: "Total Sales", value: "₹120,000", change: "+12%", isPositive: true },
    { title: "Active Users", value: "1100", change: "-8%", isPositive: false },
    { title: "Website Visits", value: "8,500", change: "+5%", isPositive: true },
    { title: "New Sign-Ups", value: "350", change: "+18%", isPositive: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
          Analytics Dashboard
        </h1>

        {/* Overview Metrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row justify-between items-center bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 ${
                metric.isPositive ? "border-green-500" : "border-red-500"
              }`}
            >
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                  {metric.title}
                </h3>
                <p className="text-md sm:text-lg text-gray-600 mt-1">{metric.value}</p>
              </div>
              <div className="text-right sm:mt-0 mt-2">
                <p
                  className={`text-sm sm:text-base ${
                    metric.isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {metric.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Sections (Placeholder for Graph) */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">
            Website Traffic
          </h2>
          <div className="p-4 bg-gray-100 rounded-lg h-48 sm:h-72 flex items-center justify-center">
            Chart Placeholder
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">
            Recent Activities
          </h2>
          <ul className="space-y-4">
            {["User Registration", "Sales Increase", "Website Traffic Surge"].map((activity, index) => (
              <li key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white rounded-lg shadow-md p-4">
                <div>
                  <h3 className="text-md sm:text-lg font-semibold text-gray-700">
                    {activity}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {activity === "User Registration" && "New user signed up on 16-03-2025"}
                    {activity === "Sales Increase" && "Sales grew by 12% on 17-03-2025"}
                    {activity === "Website Traffic Surge" && "Traffic increased by 12% on 18-03-2025"}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <p className="text-sm text-gray-500">
                    {activity === "User Registration" && "+10 Users"}
                    {activity === "Sales Increase" && "₹15,000"}
                    {activity === "Website Traffic Surge" && "+200 Visits"}
                  </p>
                </div>
              </li>
            ))}
          </ul>
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

export default Analytics;