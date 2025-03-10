import React, { useState } from "react";

const EducationForm = () => {
  const [education, setEducation] = useState([
    {
      degree: "",
      institution: "",
      year: {
        start: "",
        end: "",
        marks: {
          sem1: "",
          sem2: "",
          sem3: "",
          sem4: "",
        },
      },
    },
  ]);

  const handleNestedChange = (index, path, value) => {
    setEducation((prevEducation) => {
      const newEducation = [...prevEducation];
      const pathArray = path.split(".");
      let current = newEducation[index];

      // Navigate to the second-to-last element
      for (let i = 0; i < pathArray.length - 1; i++) {
        current = current[pathArray[i]];
      }

      // Set the value at the final path
      current[pathArray[pathArray.length - 1]] = value;
      return newEducation;
    });
  };

  const addArrayItem = () => {
    setEducation((prev) => [
      ...prev,
      {
        degree: "",
        institution: "",
        year: {
          start: "",
          end: "",
          marks: {
            sem1: "",
            sem2: "",
            sem3: "",
            sem4: "",
          },
        },
      },
    ]);
  };

  const removeArrayItem = (index) => {
    setEducation((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="mb-6">
      <h6 className="text-xl font-semibold mb-4">Education</h6>
      {education.map((edu, index) => (
        <div key={index} className="mb-4 p-4 border rounded">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium">Degree</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) =>
                  handleNestedChange(index, "degree", e.target.value)
                }
                className="border rounded p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium">Institution</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) =>
                  handleNestedChange(index, "institution", e.target.value)
                }
                className="border rounded p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium">Start Year</label>
              <input
                type="date"
                value={edu.year.start}
                onChange={(e) =>
                  handleNestedChange(index, "year.start", e.target.value)
                }
                className="border rounded p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium">End Year</label>
              <input
                type="date"
                value={edu.year.end}
                onChange={(e) =>
                  handleNestedChange(index, "year.end", e.target.value)
                }
                className="border rounded p-2"
              />
            </div>
            <div className="col-span-2">
              <h6 className="font-medium mb-2">Semester Marks</h6>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((sem) => (
                  <div key={sem} className="flex flex-col gap-2">
                    <label className="font-medium">Semester {sem}</label>
                    <input
                      type="number"
                      value={edu.year.marks[`sem${sem}`]}
                      onChange={(e) =>
                        handleNestedChange(
                          index,
                          `year.marks.sem${sem}`,
                          e.target.value
                        )
                      }
                      className="border rounded p-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => removeArrayItem(index)}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove Education
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addArrayItem}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Education
      </button>
    </div>
  );
};

export default EducationForm;
