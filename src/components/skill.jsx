import Navbar from "./navbar"
import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function Showskill() {
     const navigate=useNavigate();
  const { id } = useParams();
  const [swapskill, setSwapskill] = useState({});

  const getSkills = async () => {
    try {
      const skills = await axios.get("https://6ac9d3343115bcc958200bc3.mockapi.io/version1/skills/" + id);
      console.log(skills.data);
      setSwapskill(skills.data);
    } catch (error) {
      console.error("Error fetching skill:", error);
    }
  }

  useEffect(() => {
    getSkills();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12">
        {/* Back Link */}
        <div className="mb-6">
          <Link 
            to="/browse" 
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Browse
          </Link>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Skill Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skill Image */}
            {swapskill?.images && (
              <div className="overflow-hidden rounded-2xl shadow-md bg-white">
                <img
                  src={swapskill.images}
                  alt={swapskill.skill}
                  className="w-full h-[380px] object-cover"
                />
              </div>
            )}

            {/* Tags / Categories */}
            <div className="flex flex-wrap gap-2">
              {swapskill?.category && (
                <span className="px-3.5 py-1 bg-black text-white text-xs font-semibold rounded-full">
                  {swapskill.category}
                </span>
              )}
              {swapskill?.level && (
                <span className="px-3.5 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                  {swapskill.level}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {swapskill.skill}
            </h1>

            {/* About this skill card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
              <h2 className="text-lg font-bold text-gray-900">About this skill</h2>
              <p className="text-gray-600 leading-relaxed">
                {swapskill.content}
              </p>
              
              <div className="grid grid-cols-2 pt-4 border-t border-gray-100 gap-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="p-2 bg-gray-50 rounded-lg text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Duration</p>
                    <p className="text-sm font-semibold text-gray-800">{swapskill.duration}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="p-2 bg-gray-50 rounded-lg text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Skill Level</p>
                    <p className="text-sm font-semibold text-gray-800">{swapskill.level}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What you'll learn card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
              <h2 className="text-lg font-bold text-gray-900">What you'll learn</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 mt-2 bg-indigo-600 rounded-full flex-shrink-0"></span>
                  <span>Fundamentals and core concepts tailored to your pace</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 mt-2 bg-indigo-600 rounded-full flex-shrink-0"></span>
                  <span>Hands-on practical experience and guided exercises</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 mt-2 bg-indigo-600 rounded-full flex-shrink-0"></span>
                  <span>Tips and tricks from an experienced practitioner</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-6">
            
            {/* Skill Provider Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-5">
              <h3 className="text-md font-bold text-gray-900">Skill Provider</h3>
              
              <div className="flex items-center space-x-4">
                <img 
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLgJHTWeblIWmR277Co5QMJ1JRWINXhBUb0wsb2A2gxZT-CrsP9HZHxVg&s"
                  alt="Provider" 
                  className="w-14 h-14 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{swapskill.name}</h4>
                  <p className="text-xs text-gray-500 flex items-center mt-0.5">
                    <svg className="w-3.5 h-3.5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {swapskill.location}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 py-3 border-y border-gray-100 text-center">
                <div>
                  <p className="text-xs text-gray-400">Rating</p>
                  <p className="text-sm font-bold text-gray-900 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-amber-400 fill-current mr-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    {swapskill.rating}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Completed Exchanges</p>
                  <p className="text-sm font-bold text-gray-900 mt-0.5">{swapskill.providerExchanges || "12"}</p>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                {swapskill.providerBio || "Passionate expert eager to share knowledge and learn new skills through community exchange."}
              </p>

              <button onClick={()=>{navigate("/profile/"+swapskill.id)}} className="w-full py-2.5 border border-gray-200 hover:border-gray-300 text-gray-800 rounded-xl text-sm font-semibold transition-colors">
                View Profile
              </button>
            </div>

            {/* Interested in Learning? Card */}
            <div className="bg-indigo-50/40 rounded-2xl p-6 border border-indigo-100/60 space-y-4">
              <div>
                <h3 className="text-md font-bold text-gray-900">Interested in learning?</h3>
                <p className="text-xs text-gray-600 mt-1">Request a skill exchange with {swapskill.providerName || "Sarah"}</p>
              </div>

              <button className="w-full py-3 bg-black hover:bg-gray-800 text-white rounded-xl text-sm font-semibold shadow-sm transition-all flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <span>Request Exchange</span>
              </button>
            </div>

          </div>

        </div>
      </main>
    </div>
  )
}

export default Showskill