import React, { useState } from "react";

const UpdatePersonalDetails = () => {
  const initialState = {
    gender: "",
    maritialStatus: "",
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
  };
  const [formData, setFormData] = useState(initialState);

  // deep copy (less efficient because create deep copy of full object even for small changes)
  // const handleChange = (path, value) => {
  //   setFormData((prevFormData) => {
  //     // Create a deep copy of the entire state
  //     const newFormData = structuredClone(prevFormData); // Best approach

  //     let currentElement = newFormData;
  //     const pathArr = path.split(".");

  //     for (let i = 0; i < pathArr.length - 1; i++) {
  //       currentElement = currentElement[pathArr[i]];
  //     }

  //     currentElement[pathArr[pathArr.length - 1]] = value;

  //     return newFormData; // Since it's a deep copy, React detects the change
  //   });
  // };

  const handleChange = (path, value) => {
    setFormData((prevFormData) => {
      const pathArr = path.split("."); // ["language", "0", "proficiency", "write"]
      const newFormData = { ...prevFormData }; // Shallow copy of top-level state
      let currentElement = newFormData;

      for (let i = 0; i < pathArr.length - 1; i++) {
        const key = pathArr[i]; // proficiency
        if (!isNaN(Number(key))) {
          continue; // Skip this iteration
        }

        // Ensure we don't mutate nested objects/arrays by copying them
        if (Array.isArray(prevFormData[key])) {
          // Create new array reference from original data
          currentElement[key] = [...prevFormData[key]];
          const index = Number(pathArr[i + 1]);

          // Create a copy of the array element from original data
          currentElement[key][index] = { ...prevFormData[key][index] };

          currentElement = currentElement[key];
          currentElement = currentElement[index];
        } else if (typeof prevFormData[key] === "object") {
          // Create new object reference from original data
          currentElement[key] = { ...prevFormData[key] };
          currentElement = currentElement[key];
        }
      }

      // Update the last property
      currentElement[pathArr[pathArr.length - 1]] = value;

      return newFormData; // Return updated state
    });
  };

  const handleRemoveLanguage = (index) => {
    setFormData((prevData) => {
      const updatedLanguages = [...prevData.languages];
      updatedLanguages.splice(index, 1);

      return {
        ...prevData,
        languages: updatedLanguages,
      };
    });
  };

  const handleAddLanguage = () => {
    setFormData((prevData) => {
      // Create a new languages array with the existing languages
      const updatedLanguages = [
        ...prevData.languages,
        {
          name: "",
          proficiency: {
            read: false,
            write: false,
            speak: false,
          },
        },
      ];

      // Return a new object with all previous data, but updated languages array
      return {
        ...prevData,
        languages: updatedLanguages,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md h-screen overflow-hidden flex flex-col">
      <h4 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">
        Update Personal Details
      </h4>
      <div className="overflow-y-auto flex-1">
        <form onSubmit={handleSubmit} className="space-y-6">
          {Object.entries(formData).map(([key, value]) => {
            return (
              <div key={key} className="flex flex-col">
                {Array.isArray(formData[key]) ? (
                  <>
                    <ul className="border border-gray-200 rounded-lg p-5 bg-gray-50 max-h-80 overflow-y-auto">
                      {formData[key].map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="mb-4 p-4 bg-white rounded-md shadow-sm border border-gray-100"
                          >
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Name of language
                            </label>
                            <input
                              type="text"
                              name="language"
                              value={item.name}
                              onChange={(e) =>
                                handleChange(
                                  `languages.${index}.name`,
                                  e.target.value
                                )
                              }
                              className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            <div className="flex flex-wrap gap-4 items-center mb-3">
                              <label className="inline-flex items-center">
                                <input
                                  type="checkbox"
                                  checked={item.proficiency.read}
                                  onChange={(e) =>
                                    handleChange(
                                      `languages.${index}.proficiency.read`,
                                      e.target.checked
                                    )
                                  }
                                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-sm text-gray-700">
                                  Read
                                </span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="checkbox"
                                  checked={item.proficiency.write}
                                  onChange={(e) =>
                                    handleChange(
                                      `languages.${index}.proficiency.write`,
                                      e.target.checked
                                    )
                                  }
                                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-sm text-gray-700">
                                  Write
                                </span>
                              </label>
                              <label className="inline-flex items-center">
                                <input
                                  type="checkbox"
                                  checked={item.proficiency.speak}
                                  onChange={(e) =>
                                    handleChange(
                                      `languages.${index}.proficiency.speak`,
                                      e.target.checked
                                    )
                                  }
                                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-sm text-gray-700">
                                  Speak
                                </span>
                              </label>
                            </div>
                            <button
                              onClick={() => handleRemoveLanguage(index)}
                              type="button"
                              className="text-sm text-red-600 hover:text-red-800 font-medium transition duration-150"
                            >
                              Remove
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                    <button
                      onClick={handleAddLanguage}
                      type="button"
                      className="mt-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Add Language
                    </button>
                  </>
                ) : (
                  <>
                    <label className="block text-gray-700 font-medium mb-2 capitalize">
                      {key}
                    </label>
                    <input
                      type={key === "dob" ? "date" : "text"}
                      name={key}
                      value={value}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    />
                  </>
                )}
              </div>
            );
          })}
          <div className="pt-4 pb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium"
            >
              Update Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePersonalDetails;
