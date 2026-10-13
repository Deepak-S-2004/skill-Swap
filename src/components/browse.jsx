import Navbar from './navbar'
import { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Browse() {

  const navigate=useNavigate();
  const [swapskill, setSwapskill] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  const getSkills = async () => {
    const skills = await axios.get("https://6ac9d3343115bcc958200bc3.mockapi.io/version1/skills");
    setSwapskill(skills.data);
  }

  useEffect(() => {
    getSkills();
  }, []);

  // Search, category and level filters
  const filteredSkills = swapskill.filter((data) =>
    (data.skill || "").toLowerCase().includes(search.toLowerCase()) &&
    (category === "" ||
      (data.category || "").toLowerCase() === category.toLowerCase()) &&
    (level === "" ||
      (data.level || "").toLowerCase() === level.toLowerCase())
  );

  return (
    <>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      <div className='mt-25 mx-6'>
        <h1 className='font-bold text-4xl'>Browse Skills</h1>
        <p className='mt-2 text-gray-500'>
          Discover skills you can learn from our community
        </p>
      </div>

      {/* Search bar */}
      <div className="mt-5 flex justify-around items-center h-20 shadow-md mx-5 rounded-xl border border-gray-100">
        <div className='ms-4'>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search Skills..'
            className='shadow-md w-130 h-8 rounded-md bg-gray-100 px-4 py-2'
          />
        </div>

        {/* Category */}
        <div className='mx-2'>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='w-70 shadow-md h-8 rounded-md bg-gray-100 px-4 '
          >
            <option value="">All Categories</option>
            <option value="music">Music</option>
            <option value="cooking">Cooking</option>
            <option value="technology">Technology</option>
            <option value="Arts & Crafts">Arts & Crafts</option>
            <option value="fitness">Fitness</option>
            <option value="Language">Language</option>
            <option value="Business">Business</option>
            <option value="Photography">Photography</option>
          </select>
        </div>

        {/* Levels */}
        <div className='me-6 ms-2'>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className='w-80 shadow-md h-8 rounded-md bg-gray-100 px-4 '
          >
            <option value="">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>

      {/* Skill cards */}
      <div className="bg-white py-12 grid grid-cols-3 gap-5 pe-5 ps-5">
        {filteredSkills.map((data) => (
          <div
            key={data.id}
            className="w-100 h-140 border border-gray-200 rounded-xl hover:shadow-2xl"
          >
            <div>
              <img
                src={data.images}
                alt={data.skill}
                className="rounded shadow-xl w-100 h-60"
              />
            </div>

            <div className="flex justify-around mt-6 items-center">
              <div>
                <h1>{data.skill}</h1>
              </div>

              <div className={`border rounded-lg w-20 h-5 flex justify-center ${
                data.level?.toLowerCase() === "intermediate"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}>
                <p className="text-xs">{data.level}</p>
              </div>
            </div>

            <div className="mx-6 mt-6 flex justify-center">
              <p className="mt-5 text-sm text-gray-500">
                {data.content}
              </p>
            </div>

            <div className="ms-6 flex">
              <p className="mt-2 text-sm text-gray-500">
                {data.duration}
              </p>
            </div>

            <div className="ms-6 flex">
             <Link to={"/skill/"+data.id}> <h1 className="mt-2 mb-4">{data.name}</h1></Link>
            </div>

            <div className="flex justify-center mb-4">
              <button onClick={()=>{navigate("/skill/"+data.id)}} className="bg-black text-white border rounded-xl w-80 h-10">
                View Details
              </button>
            </div>
          </div>
        ))}

        {filteredSkills.length === 0 && (
          <p className="col-span-3 text-center text-gray-500">
            No skills found.
          </p>
        )}
      </div>
    </>
  )
}

export default Browse