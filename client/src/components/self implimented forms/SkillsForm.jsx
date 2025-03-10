import React, { useState } from "react";

const SkillsForm = () => {
  const [skills, setSkills] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const addArrayItem = () => {
    if (inputVal.trim() !== "") {
      setSkills([...skills, inputVal]);
      setInputVal("");
    }
  };

  const updateSkill = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const removeArrayItem = (targetIndex) => {
    const newSkills = skills.filter((_, index) => index !== targetIndex);
    setSkills(newSkills);
  };

  return (
    <div>
      <h3>Skills</h3>
      {/* Input for adding new skills */}
      <input
        type="text"
        value={inputVal}
        onChange={handleChange}
        className="border rounded p-2 flex-1"
        placeholder="Add a skill"
      />
      <button
        type="button"
        onClick={addArrayItem}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Skill
      </button>

      {/* Mapped list of skills */}
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={skill}
              onChange={(e) => updateSkill(index, e.target.value)} // Corrected: Now updates individual skills
              className="border rounded p-2 flex-1"
              placeholder="Edit skill"
            />
            <button
              type="button"
              onClick={() => removeArrayItem(index)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsForm;
