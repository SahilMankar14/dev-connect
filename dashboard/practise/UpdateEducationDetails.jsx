import React, { useState } from "react";

const UpdateEducationDetails = () => {
  const initialState = {
    education: [
      {
        year: {
          start: "",
          end: "",
        },
        degree: "",
        institution: "",
      },
    ],
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (path, value) => {
    setFormData((prevData) => {
      const copyFormData = { ...prevData };
      const currentElement = copyFormData;

      const pathArr = path.split("."); // ["education", "0", "year", "start"]
      for (let i = 0; i < pathArr.length - 1; i++) {
        let key = pathArr[i];

        if (!isNaN(Number(key))) {
          continue;
        }

        if (Array.isArray(currentElement[key])) {
          currentElement[key] = [...currentElement[key]];
          const index = Number(pathArr[i + 1]);

          // Create a copy of the array element from original data
          currentElement[key][index] = { ...currentElement[key][index] };

          currentElement = currentElement[key];
          currentElement = currentElement[index];
        } else if (typeof currentElement[key] === "object") {
          currentElement[key] = { ...currentElement[key] };
          currentElement = currentElement[key];
        }
      }

      // Update the last property
      currentElement[pathArr[pathArr.length - 1]] = value;

      return copyFormData;
    });
  };

  const handleAddEducation = () => {
    // Logic to be implemented
    setFormData((prevData) => {
      const newEducation = [
        ...prevData.education,
        {
          year: {
            start: "",
            end: "",
          },
          degree: "",
          institution: "",
        },
      ];

      return {
        ...prevData,
        education: newEducation,
      };
    });
  };

  const handleRemoveEducation = (index) => {
    // Logic to be implemented
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md h-screen overflow-hidden flex flex-col">
      <h4 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">
        Update Education Details
      </h4>
      <div className="overflow-y-auto flex-1">
        <form onSubmit={handleSubmit} className="space-y-6">
          <ul className="border border-gray-200 rounded-lg p-5 bg-gray-50 max-h-80 overflow-y-auto">
            {formData.education.map((edu, index) => (
              <li
                key={index}
                className="mb-4 p-4 bg-white rounded-md shadow-sm border border-gray-100"
              >
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Year
                    </label>
                    <input
                      type="number"
                      value={edu.year.start}
                      onChange={(e) =>
                        handleChange(
                          `education.${index}.year.start`,
                          e.target.value
                        )
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Year
                    </label>
                    <input
                      type="number"
                      value={edu.year.end}
                      onChange={(e) =>
                        handleChange(
                          `education.${index}.year.end`,
                          e.target.value
                        )
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Degree
                  </label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) =>
                      handleChange(`education.${index}.degree`, e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Institution
                  </label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) =>
                      handleChange(
                        `education.${index}.institution`,
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {formData.education.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveEducation(index)}
                    className="mt-3 text-sm text-red-600 hover:text-red-800 font-medium transition duration-150"
                  >
                    Remove
                  </button>
                )}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={handleAddEducation}
            className="mt-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Education
          </button>

          <div className="pt-4 pb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium"
            >
              Update Education Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEducationDetails;
