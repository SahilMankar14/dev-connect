import React from "react";

const EducationSection = ({
  education,
  handleNestedChange,
  addArrayItem,
  removeArrayItem,
}) => {
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
                  handleNestedChange(
                    `education.${index}.degree`,
                    e.target.value
                  )
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
                  handleNestedChange(
                    `education.${index}.institution`,
                    e.target.value
                  )
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
                  handleNestedChange(
                    `education.${index}.year.start`,
                    e.target.value
                  )
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
                  handleNestedChange(
                    `education.${index}.year.end`,
                    e.target.value
                  )
                }
                className="border rounded p-2"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => removeArrayItem("education", index)}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove Education
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          addArrayItem("education", {
            degree: "",
            institution: "",
            year: { start: "", end: "" },
          })
        }
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Education
      </button>
    </div>
  );
};

export default EducationSection;
