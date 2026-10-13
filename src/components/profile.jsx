import Navbar from "./navbar"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

function Profile() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [swapskill, setSwapskill] = useState({})
  const [activeTab, setActiveTab] = useState("offered")

  const getSkills = async () => {
    try {
      const skills = await axios.get("https://6ac9d3343115bcc958200bc3.mockapi.io/version1/skills/" + id)
      setSwapskill(skills.data)
    } catch (error) {
      console.error("Error fetching skill:", error)
    }
  }

  useEffect(() => {
    getSkills()
  }, [id])

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-6">

        {/* Profile Header */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <img
              src={swapskill.providerImage || swapskill.avatar || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLgJHTWeblIWmR277Co5QMJ1JRWINXhBUb0wsb2A2gxZT-CrsP9HZHxVg&s"}
              alt={swapskill.name || "Profile"}
              className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-md"
            />

            <div className="space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {swapskill.name}
              </h1>

              <p className="text-sm text-gray-500">
                {swapskill.location}
              </p>

              <p className="text-sm text-gray-600 pt-1">
                {swapskill.providerBio || swapskill.bio || "Passionate skill-sharing community member"}
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-sm">
                <div className="flex items-center font-medium text-gray-800">
                  <span className="font-bold mr-1 text-amber-500">
                    ★ {swapskill.rating || "5.0"}
                  </span>
                  <span className="text-gray-500 font-normal">rating</span>
                </div>

                <div className="flex items-center font-medium text-gray-800">
                  <span className="font-bold mr-1">
                    {swapskill.providerExchanges || swapskill.exchangesCompleted || "12"}
                  </span>
                  <span className="text-gray-500 font-normal">
                    exchanges completed
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button className="px-5 py-2.5 bg-black hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition-all shadow-sm">
            Contact
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 my-8 bg-gray-200/60 p-1.5 rounded-2xl w-fit">
          <button
            onClick={() => setActiveTab("offered")}
            className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "offered"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Skills Offered
          </button>

          <button
            onClick={() => setActiveTab("wanted")}
            className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "wanted"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Skills Wanted
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {activeTab === "offered" ? (

            /* Skills Offered */
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={swapskill.images}
                    alt={swapskill.skill || "Skill Image"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <span className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full shadow-sm">
                    {swapskill.category || "Music"}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-gray-900 leading-snug">
                      {swapskill.skill || "Acoustic Guitar for Beginners"}
                    </h3>

                    <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full flex-shrink-0">
                      {swapskill.level || "Beginner"}
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {swapskill.content || swapskill.description || "Learn the fundamentals of acoustic guitar including chords, strumming patterns, and your first songs."}
                  </p>

                  <div className="text-xs text-gray-500 pt-2">
                    {swapskill.duration || "1 hour/session"}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-4">
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <img
                    src={swapskill.providerImage || swapskill.avatar || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"}
                    alt={swapskill.name || "Provider"}
                    className="w-7 h-7 rounded-full object-cover"
                  />

                  <span className="text-xs font-medium text-gray-800">
                    {swapskill.name || "Sarah Chen"}
                  </span>
                </div>

                <button
                  onClick={() => navigate("/skill/" + swapskill.id)}
                  className="w-full py-3 bg-black hover:bg-gray-800 text-white rounded-2xl text-xs font-semibold transition-all shadow-sm"
                >
                  View Details
                </button>
              </div>
            </div>

          ) : (

            /* Skills Wanted - Simple UI Container */
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">
                  Skill Wanted
                </span>

                <span className="text-gray-400 text-sm">#1</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                Italian Cuisine
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                I want this skill
              </p>

              <div className="mt-5">
                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">
                  Cooking
                </span>
              </div>
            </div>

          )}

        </div>
      </main>
    </div>
  )
}

export default Profile