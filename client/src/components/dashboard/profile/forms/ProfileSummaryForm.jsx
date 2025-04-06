import React from "react";

const ProfileSummaryForm = ({ summary, handleChange, handleSubmit }) => {
  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded-xl max-h-80 overflow-y-auto scrollbar-hide">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Update Profile Summary
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Profile Summary
          </label>
          <textarea
            className="p-3 w-full border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="6"
            value={summary || ""}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Write a brief professional summary highlighting your experience, skills, and career goals..."
          />
        </div>

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

export default ProfileSummaryForm;
