import React from 'react'

function EditProfile() {
  return (
   <>
    <div className="space-y-5">
              {/* Skill Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skill Title
                </label>

                <input
                  type="text"
                  placeholder="Enter skill title"
                  
                
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
                  
                  
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                type="button"
               
                className="px-6 py-3 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-700 transition shadow-sm"
              >
                Publish Skill
              </button>
            </div>
   </>
  )
}

export default EditProfile
