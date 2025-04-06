import React from "react";

const SkillsForm = ({
  skills,
  handleChange,
  handleSubmit,
  addSkill,
  removeSkill,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded-xl max-h-80 overflow-y-auto scrollbar-hide">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Skills</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-2">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <input
                className="p-2 flex-grow border rounded-lg border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="text"
                value={skill || ""}
                onChange={(e) => handleChange(index, e.target.value)}
              />
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addSkill}
            className="mt-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-200 flex items-center"
          >
            <span className="mr-1">+</span> Add Skill
          </button>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 mt-4 border rounded-lg px-12 py-2 font-[Inter] text-white font-medium transition duration-300"
          >
            Submit Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default SkillsForm;
