import Link from "next/link";
import React from "react";

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Finish project report",
      description: "Complete the final report for the project and submit it.",
      status: "In Progress",
      dueDate: "18-3-2025",
    },
    {
      id: 2,
      title: "Update website content",
      description: "Revise the homepage text to reflect recent changes.",
      status: "Pending",
      dueDate: "11-3-2025",
    },
    {
      id: 3,
      title: "Team meeting",
      description: "Discuss the project milestones and progress with the team.",
      status: "Completed",
      dueDate: "14-3-2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
          Tasks
        </h1>

        {/* Task List Section */}
        <section className="space-y-4 sm:space-y-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 w-full"
              style={{
                borderColor:
                  task.status === "Completed"
                    ? "green"
                    : task.status === "In Progress"
                    ? "yellow"
                    : "red",
              }}
            >
              <div className="flex flex-col w-full sm:w-auto">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {task.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1 sm:mt-2">
                  {task.description}
                </p>
                <p className="text-sm text-gray-600 mt-1 sm:mt-2">
                  Due Date: {task.dueDate}
                </p>
              </div>

              <section className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-0 w-full sm:w-auto">
                <span
                  className={`px-3 py-2 text-center text-sm rounded-lg w-full sm:w-auto ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : task.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {task.status}
                </span>

                {/* Buttons */}
                <button className="px-3 sm:px-4 py-2 text-blue-100 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors w-full sm:w-auto">
                  Edit
                </button>

                {task.status !== "Completed" && (
                  <button className="px-3 sm:px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors w-full sm:w-auto">
                    Mark as Completed
                  </button>
                )}

                <button className="px-3 sm:px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors w-full sm:w-auto">
                  Delete
                </button>
              </section>
            </div>
          ))}
        </section>

        <Link href="/dashboard">
          <div className="mt-6 sm:mt-8 w-fit text-blue-500 border border-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
            Go Back
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Tasks;
