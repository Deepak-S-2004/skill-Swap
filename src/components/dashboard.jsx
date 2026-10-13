import { useState } from "react";
import Navbar from "./navbar";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("All Exchanges");

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="min-h-screen bg-gray-50 p-5 md:p-8 mt-16">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-950">My Dashboard</h1>
          <p className="mt-3 text-xl text-gray-600">
            Manage your skill exchanges
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-10">
          <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-7">
            <div>
              <p className="text-gray-600">Pending Requests</p>
              <h2 className="mt-2 text-4xl font-bold">0</h2>
            </div>
            <span className="text-5xl text-amber-600">◷</span>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-7">
            <div>
              <p className="text-gray-600">Active Exchanges</p>
              <h2 className="mt-2 text-4xl font-bold">1</h2>
            </div>
            <span className="text-5xl text-green-600">✓</span>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-7">
            <div>
              <p className="text-gray-600">Completed</p>
              <h2 className="mt-2 text-4xl font-bold">1</h2>
            </div>
            <span className="text-5xl text-blue-600">☑</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap items-center gap-1 rounded-2xl bg-gray-200 p-1.5 w-fit">
          {["All Exchanges", "Pending", "Accepted", "Completed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-xl px-3 py-2 font-medium ${
                activeTab === tab
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              {tab}
              {tab === "All Exchanges"
                ? " (2)"
                : tab === "Pending"
                  ? " (0)"
                  : tab === "Accepted"
                    ? " (1)"
                    : " (1)"}
            </button>
          ))}
        </div>

        {/* Exchange Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-7">
          {/* Accepted Card */}
          {(activeTab === "All Exchanges" || activeTab === "Accepted") && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
              <div className="flex items-start justify-between gap-3 mb-6">
                <div className="flex items-center gap-5">
                  <span className="text-4xl">👨🏻‍🦰</span>
                  <div>
                    <h2 className="text-xl font-semibold">Marcus Johnson</h2>
                    <p className="mt-1 text-base text-gray-500">Austin, TX</p>
                  </div>
                </div>
                <span className="rounded-lg border border-green-200 bg-green-50 px-3 py-1 text-sm text-green-700">
                  Accepted
                </span>
              </div>

              <div className="mb-5 flex gap-4">
                <span className="text-2xl text-green-600">→</span>
                <div>
                  <p className="text-base text-gray-600">You're teaching</p>
                  <h3 className="mt-1 text-lg font-semibold">Guitar Lessons</h3>
                </div>
              </div>

              <div className="mb-6 flex gap-4">
                <span className="text-2xl text-blue-600">→</span>
                <div>
                  <p className="text-base text-gray-600">You're learning</p>
                  <h3 className="mt-1 text-lg font-semibold">
                    Italian Cooking
                  </h3>
                </div>
              </div>

              <div className="mb-6 flex items-center gap-3 text-gray-500">
                <span className="text-xl">▦</span>
                <p>Scheduled for 3/20/2026</p>
              </div>

              <button className="w-full rounded-xl border border-gray-200 py-2.5 font-medium hover:bg-gray-100">
                Message Marcus
              </button>
            </div>
          )}

          {/* Completed Card */}
          {(activeTab === "All Exchanges" || activeTab === "Completed") && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
              <div className="flex items-start justify-between gap-3 mb-6">
                <div className="flex items-center gap-5">
                  <span className="text-4xl">👨🏽</span>
                  <div>
                    <h2 className="text-xl font-semibold">Zara Patel</h2>
                    <p className="mt-1 text-base text-gray-500">New York, NY</p>
                  </div>
                </div>
                <span className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700">
                  Completed
                </span>
              </div>

              <div className="mb-5 flex gap-4">
                <span className="text-2xl text-green-600">→</span>
                <div>
                  <p className="text-base text-gray-600">You're teaching</p>
                  <h3 className="mt-1 text-lg font-semibold">Photography</h3>
                </div>
              </div>

              <div className="mb-6 flex gap-4">
                <span className="text-2xl text-blue-600">→</span>
                <div>
                  <p className="text-base text-gray-600">You're learning</p>
                  <h3 className="mt-1 text-lg font-semibold">Graphic Design</h3>
                </div>
              </div>

              <div className="mb-6 flex items-center gap-3 text-gray-500">
                <span className="text-xl">▦</span>
                <p>Scheduled for 3/10/2026</p>
              </div>

              <button className="w-full rounded-xl border border-gray-200 py-2.5 font-medium hover:bg-gray-100">
                Leave Review
              </button>
            </div>
          )}

          {/* Pending Empty State */}
          {activeTab === "Pending" && (
            <div className="col-span-full rounded-2xl border border-gray-200 bg-white p-12 text-center">
              <p className="text-lg text-gray-500">No pending requests</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
