import React from "react";

const LanguagesSection = ({
  languages,
  handleNestedChange,
  addArrayItem,
  removeArrayItem,
}) => {
  return (
    <div className="mb-6">
      <h6 className="text-xl font-semibold mb-4">Languages</h6>
      {languages.map((language, index) => (
        <div key={index} className="mb-4 p-4 border rounded">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium">Language Name</label>
              <input
                type="text"
                value={language.name}
                onChange={(e) =>
                  handleNestedChange(
                    `personalDetails.languages.${index}.name`,
                    e.target.value
                  )
                }
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
                    onChange={(e) =>
                      handleNestedChange(
                        `personalDetails.languages.${index}.proficiency.read`,
                        e.target.checked
                      )
                    }
                    className="form-checkbox"
                  />
                  Read
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={language.proficiency.write}
                    onChange={(e) =>
                      handleNestedChange(
                        `personalDetails.languages.${index}.proficiency.write`,
                        e.target.checked
                      )
                    }
                    className="form-checkbox"
                  />
                  Write
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={language.proficiency.speak}
                    onChange={(e) =>
                      handleNestedChange(
                        `personalDetails.languages.${index}.proficiency.speak`,
                        e.target.checked
                      )
                    }
                    className="form-checkbox"
                  />
                  Speak
                </label>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => removeArrayItem("personalDetails.languages", index)}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove Language
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          addArrayItem("personalDetails.languages", {
            name: "",
            proficiency: { read: false, write: false, speak: false },
          })
        }
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Language
      </button>
    </div>
  );
};

export default LanguagesSection;
