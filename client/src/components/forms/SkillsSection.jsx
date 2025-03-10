import React from "react";

const SkillsSection = ({
  skills,
  handleArrayChange,
  addArrayItem,
  removeArrayItem,
}) => {
  return (
    <div className="mb-6">
      <h6 className="text-xl font-semibold mb-4">Skills</h6>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={skill}
              onChange={(e) =>
                handleArrayChange("skills", index, e.target.value)
              }
              className="border rounded p-2 flex-1"
              placeholder="Add a skill"
            />
            <button
              type="button"
              onClick={() => removeArrayItem("skills", index)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem("skills")}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Skill
        </button>
      </div>
    </div>
  );
};

export default SkillsSection;
