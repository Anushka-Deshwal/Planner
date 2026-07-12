function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">
        Good Evening, Anushka 🌸
      </h1>

      <p className="text-gray-500 mt-2">
        Stay focused and make today productive!
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-gray-500">Study Streak</h2>
          <p className="text-3xl font-bold text-purple-600 mt-3">
            🔥 15 Days
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-gray-500">Tasks Completed</h2>
          <p className="text-3xl font-bold text-green-500 mt-3">
            ✅ 12
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-gray-500">Productivity</h2>
          <p className="text-3xl font-bold text-pink-500 mt-3">
            🚀 82%
          </p>
        </div>
      </div>

      {/* Today's Tasks */}
      <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">
          Today's Tasks
        </h2>

        <ul className="space-y-3">
          <li>📘 Complete DSA Arrays</li>
          <li>💻 Work on Campus Planner</li>
          <li>🗣️ Practice English for 30 mins</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;