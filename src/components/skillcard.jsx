import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Skill() {
  const navigate = useNavigate();
  const [featuredSkills, setFeaturedSkills] = useState([]);

  const getFeaturedSkills = async () => {
    try {
      const response = await axios.get("https://6ac9d3343115bcc958200bc3.mockapi.io/version1/skills");
      console.log(response.data);
      setFeaturedSkills(response.data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  useEffect(() => {
    getFeaturedSkills();
  }, []);
  return (
    <>
      <div className="mt-16 h-100 bg-gradient-to-br from-violet-50 to-pink-50 flex justify-center">
        <div className="text-center mt-18">
          <h1 className="text-4xl font-bold text-violet-600">
            Trade Skills, Grow Together
          </h1>

          <p className="text-2xl text-gray-700 mt-8 max-w-4xl mx-auto">
            Join a community where everyone teaches and everyone learns.
            Exchange
            <br />
            skills without spending money.
          </p>

          <div className="flex justify-center gap-6 mt-16">
            <Link to="/Browse"><button className="w-50 h-10 bg-black text-white rounded-xl text-md font-semibold hover:bg-gray-800">
              Browse Skills
            </button></Link>

            <Link to="/addskill"><button className="w-50 h-10 bg-white border border-gray-300 rounded-xl text-lg font-semibold hover:bg-gray-100">
              Share Your Skill
            </button></Link>
          </div>
        </div>
      </div>

      {/* How SkillSwap Works */}
      <div className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          How SkillSwap Works
        </h2>

        <div className="max-w-7xl mx-auto flex justify-center gap-7">
          {/* Card 1 */}
          <div className="w-80 border border-gray-300 rounded-2xl p-9">
            <div className="w-18 h-18 rounded-full bg-indigo-100 flex items-center justify-center text-3xl mb-8">
              🔍
            </div>

            <h3 className="text-xl font-semibold mb-8">1. Find a Skill</h3>

            <p className="text-lg text-gray-600 leading-relaxed">
              Browse through hundreds of skills offered by community members.
              Filter by category, level, and location.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-80 border border-gray-300 rounded-2xl p-9">
            <div className="w-18 h-18 rounded-full bg-purple-100 flex items-center justify-center text-3xl mb-8">
              👥
            </div>

            <h3 className="text-xl font-semibold mb-8">
              2. Propose an Exchange
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed">
              Offer one of your skills in exchange. Connect with others and
              arrange a mutually beneficial learning experience.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-80 border border-gray-300 rounded-2xl p-9">
            <div className="w-18 h-18 rounded-full bg-pink-100 flex items-center justify-center text-3xl mb-8">
              🏅
            </div>

            <h3 className="text-xl font-semibold mb-8">3. Learn & Teach</h3>

            <p className="text-lg text-gray-600 leading-relaxed">
              Meet up, share knowledge, and grow together. Build your skills and
              your network at the same time.
            </p>
          </div>
        </div>
      </div>

      {/* featured skills */}

      <div className="bg-white py-12">
        <div className="flex justify-between items-center">
          <div className="ms-5">
            <h1 className="font-bold text-2xl items-center">Featured Skills</h1>
            <h1>Popular skills being shared right now</h1>
          </div>
          <div className="flex me-5 h-8 w-20 border justify-center rounded-md items-center hover:bg-gray-300">
            <Link to="/Browse"><h1>View All</h1></Link>
          </div>
        </div>
      </div>

      {/* cards skill */}

  
      <div className="flex mx-4 gap-4">
        {featuredSkills.slice(0, 3).map((data) => (
          <div
            key={data.id}
            className="w-100 h-140 border border-gray-200 rounded-xl hover:shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div>
                <img
                  src={data.images}
                  alt={data.skill}
                  className="rounded shadow-xl w-100 h-60 object-cover"
                />
              </div>

              <div className="flex justify-around mt-6 items-center px-4">
                <div>
                  <h1 className="font-bold">{data.skill}</h1>
                </div>

                <div className={`border rounded-lg px-3 py-0.5 flex justify-center ${
                  data.level?.toLowerCase() === "intermediate" || data.level?.toLowerCase() === "beginner"
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black"
                }`}>
                  <p className="text-xs">{data.level}</p>
                </div>
              </div>

              <div className="mx-6 mt-6 flex justify-center">
                <p className="mt-5 text-sm text-gray-500 line-clamp-2">
                  {data.content}
                </p>
              </div>

              <div className="ms-6 flex">
                <p className="mt-2 text-sm text-gray-500">{data.duration}</p>
              </div>

              <div className="ms-6 flex">
                <h1 className="mt-2 mb-4 font-medium">
                  {Array.isArray(data.name) ? data.name[0] : (data.name || data.providerName)}
                </h1>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <button 
                onClick={() => { navigate("/skill/" + data.id) }} 
                className="bg-black text-white border rounded-xl w-80 h-10 font-semibold text-sm hover:bg-gray-800 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <div className="mt-4 flex justify-around items-center h-50 bg-violet-600 text-white">
          <div>
            <h6 className="text-2xl font-bold">1,200+</h6>
            <p>Active Members</p>
          </div>
          <div>
            <h6 className="text-2xl font-bold">500+</h6>
            <p>Skills Available</p>
          </div>
          <div>
            <h6 className="text-2xl font-bold">3000+</h6>
            <p>Successful Exchanges</p>
          </div>
        </div>
      </div>

      {/* start learning container */}

      <div className="mt-16 h-60">
        <div className="flex flex-col justify-center items-center mt-3">
          <h1 className="text-black font-bold text-3xl">
            Ready to Start Learning?
          </h1>
          <p className="text-gray-600 text-xl mt-4">
            Join our community today and discover the skills you've always
            wanted to learn.
          </p>
          <div className="mt-6 bg-black text-white w-30 h-10 flex items-center justify-center rounded-md">
           <Link to="/Browse"><button>Get Started</button></Link> 
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Skill;
