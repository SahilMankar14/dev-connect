import React, { useState } from "react";

const AccomplishmentForm = () => {
  initialState = {
    workSamples: [""],
    researchPapers: [""],
    presentations: [""],
    patents: [""],
    certifications: [""],
  };

  const [accomplishments, setAccomplishments] = useState(initialState);

  const handleChange = () => {};

  const removeArrayItem = () => {};

  const addArrayItem = () => {};

  return (
    <div>
      {/* Accomplishments Section */}
      <div className="mb-6">
        <h6 className="text-xl font-semibold mb-4">Accomplishments</h6>

        {/* Work Samples */}
        <div className="mb-4">
          <label className="font-medium block mb-2">Work Samples</label>
          {accomplishments.workSamples.map((sample, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={sample}
                onChange={handleChange}
                className="border rounded p-2 flex-1"
              />
              <button
                type="button"
                onClick={removeArrayItem}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Work Sample
          </button>
        </div>

        {/* Research Papers */}
        <div className="mb-4">
          <label className="font-medium block mb-2">Research Papers</label>
          {formData.accomplishments.researchPapers.map((paper, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={paper}
                onChange={handleChange}
                className="border rounded p-2 flex-1"
              />
              <button
                type="button"
                onClick={removeArrayItem}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addArrayItem}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Research Paper
          </button>
        </div>

        {/* Similar structures for presentations, patents, and certifications */}
        {/* Presentations */}
        <div className="mb-4">
          <label className="font-medium block mb-2">Presentations</label>
          {formData.accomplishments.presentations.map((presentation, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={presentation}
                onChange={handleChange}
                className="border rounded p-2 flex-1"
              />
              <button
                type="button"
                onClick={removeArrayItem}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addArrayItem}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Presentation
          </button>
        </div>

        {/* Patents */}
        <div className="mb-4">
          <label className="font-medium block mb-2">Patents</label>
          {accomplishments.patents.map((patent, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={patent}
                onChange={handleChange}
                className="border rounded p-2 flex-1"
              />
              <button
                type="button"
                onClick={removeArrayItem}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addArrayItem}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Patent
          </button>
        </div>

        {/* Certifications */}
        <div className="mb-4">
          <label className="font-medium block mb-2">Certifications</label>
          {formData.accomplishments.certifications.map((cert, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={cert}
                onChange={handleChange}
                className="border rounded p-2 flex-1"
              />
              <button
                type="button"
                onClick={removeArrayItem}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addArrayItem}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Certification
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccomplishmentForm;
