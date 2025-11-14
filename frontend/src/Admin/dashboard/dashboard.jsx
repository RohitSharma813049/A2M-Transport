import React from "react";

export function Dashboard() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex">


        {/* MAIN CONTENT */}
        <div className="flex-1 p-6">

          {/* HEADER */}
          <header className="bg-white p-4 rounded-lg shadow mb-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Welcome Back 👋</h2>
            <div className="flex items-center gap-3">
              <span className="text-gray-600">Admin User</span>
              <img
                src="/user-avatar.png"
                alt="User"
                className="w-10 h-10 rounded-full border"
              />
            </div>
          </header>

          {/* STATS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-gray-500">Total Bookings</h3>
              <p className="text-3xl font-bold mt-2">120</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-gray-500">Completed Moves</h3>
              <p className="text-3xl font-bold mt-2">85</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-gray-500">Pending Requests</h3>
              <p className="text-3xl font-bold mt-2">12</p>
            </div>

          </div>

          {/* RECENT ACTIVITY */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>

            <ul className="space-y-4 text-gray-600">
              <li>📦 New booking from *Rohit Kumar*</li>
              <li>🚚 Move completed for *Mohan Singh*</li>
              <li>📞 Quote requested by *Priya Sharma*</li>
              <li>✏️ Admin updated pricing details</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}
