import React from "react";

const EducationForm = ({
  education,
  handleChange,
  handleSubmit,
  addEducation,
  removeEducation,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded-xl max-h-80 overflow-y-auto scrollbar-hide">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Update Education
      </h2>
      <form onSubmit={handleSubmit}>
        {education.map((edu, index) => (
          <div
            key={index}
            className="mb-4 p-4 border border-gray-200 rounded-lg"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Education #{index + 1}</h3>
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>

            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Degree
              </label>
              <input
                className="p-2 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="text"
                value={edu.degree || ""}
                onChange={(e) => handleChange(index, "degree", e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Institution
              </label>
              <input
                className="p-2 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="text"
                value={edu.institution || ""}
                onChange={(e) =>
                  handleChange(index, "institution", e.target.value)
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Year
                </label>
                <input
                  className="p-2 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  value={edu.year?.start || ""}
                  onChange={(e) =>
                    handleChange(index, "year.start", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Year
                </label>
                <input
                  className="p-2 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  value={edu.year?.end || ""}
                  onChange={(e) =>
                    handleChange(index, "year.end", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addEducation}
          className="w-full mt-2 bg-blue-100 text-blue-600 px-3 py-2 rounded-md hover:bg-blue-200 flex items-center justify-center"
        >
          <span className="mr-1">+</span> Add Education
        </button>

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

export default EducationForm;
