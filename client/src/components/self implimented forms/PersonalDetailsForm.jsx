import React, { useState } from "react";

const PersonalDetailsForm = () => {
  const [personalDetails, setPersonalDetails] = useState({
    gender: "",
    maritalStatus: "",
    dob: "",
    workPermit: "",
    languages: [
      {
        name: "",
        proficiency: {
          read: false,
          write: false,
          speak: false,
        },
      },
    ],
  });

  const handleNestedChange = (index, field, value) => {
    setLanguages((prevData) => {
      const updatedLanguages = [...prevData];
      const path = field.split(".");
      const languageToUpdate = { ...updatedLanguages[index] };

      let current = languageToUpdate;

      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }

      current[path[path.length - 1]] = value;

      updatedLanguages[index] = languageToUpdate;
      return updatedLanguages;
    });
  };
  const addArrayItem = () => {};

  const removeArrayItem = () => {};

  return (
    <div>
      {/* Personal Details Section */}
      <div className="mb-6">
        <h6 className="text-xl font-semibold mb-4">Personal Details</h6>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="gender" className="font-medium">
              Gender
            </label>
            <select
              id="gender"
              value={personalDetails.gender}
              onChange={handleNestedChange}
              className="border rounded p-2"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="maritalStatus" className="font-medium">
              Marital Status
            </label>
            <select
              id="maritalStatus"
              value={personalDetails.maritalStatus}
              onChange={handleNestedChange}
              className="border rounded p-2"
            >
              <option value="">Select marital status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="dob" className="font-medium">
              Date of Birth
            </label>
            <input
              id="dob"
              type="date"
              value={personalDetails.dob}
              onChange={handleNestedChange}
              className="border rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="workPermit" className="font-medium">
              Work Permit
            </label>
            <input
              id="workPermit"
              type="text"
              value={personalDetails.workPermit}
              onChange={handleNestedChange}
              className="border rounded p-2"
              placeholder="Work permit status"
            />
          </div>
        </div>
      </div>
      {/* Languages Section */}
      <div className="mb-6">
        <h6 className="text-xl font-semibold mb-4">Languages</h6>
        {personalDetails.languages.map((language, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-medium">Language Name</label>
                <input
                  type="text"
                  value={language.name}
                  onChange={handleNestedChange}
                  className="border rounded p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium">Proficiency</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={language.proficiency.read}
                      onChange={handleNestedChange}
                      className="form-checkbox"
                    />
                    Read
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={language.proficiency.write}
                      onChange={handleNestedChange}
                      className="form-checkbox"
                    />
                    Write
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={language.proficiency.speak}
                      onChange={handleNestedChange}
                      className="form-checkbox"
                    />
                    Speak
                  </label>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={removeArrayItem}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove Language
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addArrayItem}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Language
        </button>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
