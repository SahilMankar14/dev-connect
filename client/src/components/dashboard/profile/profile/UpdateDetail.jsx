import React from "react";

const UpdateDetail = ({ data, handleChange, handleSubmit }) => {
  if (!data) return null;

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl h-80 overflow-y-auto scrollbar-hide">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Update Information
      </h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex flex-col mb-2">
            <label className="text-base font-bold text-gray-800 capitalize py-2">
              {key}:
            </label>
            <input
              className="p-2 border rounded-lg border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="text"
              value={value || ""}
              onChange={handleChange}
              name={key}
            />
          </div>
        ))}
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

export default UpdateDetail;
