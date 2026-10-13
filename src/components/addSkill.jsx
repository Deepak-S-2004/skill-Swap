import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import axios from "axios";
import { useState } from "react";

function AddSkill() {
  const navigate = useNavigate();

  const [skill, setSkill] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState("");

  const postskill = async () => {
    const newskill = {
      skill:skill,
      category:category,
      level:level,
      duration:duration,
      content:content,
      images:images
    };

    try {
      await axios.post("https://6ac9d3343115bcc958200bc3.mockapi.io/version1/skills", newskill);

      alert("Skill published successfully!");

      setSkill("");
      setCategory("");
      setLevel("");
      setDuration("");
      setContent("");
      setImages("");
    } catch (error) {
      console.error("Error publishing skill:", error);
      alert("Failed to publish skill. Please try again.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 pt-28 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="mb-8">
            <h1 className="font-bold text-gray-900 text-3xl">
              Share Your Skill
            </h1>
            <p className="text-gray-500 mt-2">
              Help others learn something new by offering your expertise
            </p>
          </div>

          {/* Form */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Skill Details
            </h2>

            <div className="space-y-5">
              {/* Skill Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skill Title
                </label>

                <input
                  type="text"
                  placeholder="Enter skill title"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              {/* Category and Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>

                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
                  >
                    <option value="">Select category</option>
                    <option value="Music">Music</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Technology">Technology</option>
                    <option value="Arts & Crafts">Arts & Crafts</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Language">Language</option>
                    <option value="Business">Business</option>
                    <option value="Photography">Photography</option>
                  </select>
                </div>

                {/* Skill Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Skill Level
                  </label>

                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
                  >
                    <option value="">Select level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Session Duration
                </label>

                <input
                  type="text"
                  placeholder="e.g. 1 hour per session"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

               <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  image Link
                </label>

                <input
                  type="text"
                  placeholder="image url"
                  value={images}
                  onChange={(e) => setImages(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>

                <textarea
                  rows={4}
                  placeholder="Describe what you will teach and what students will learn..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={postskill}
                className="px-6 py-3 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-700 transition shadow-sm"
              >
                Publish Skill
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddSkill;