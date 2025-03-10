import React from "react";

const ProfileSummarySection = ({ profileSummary, handleNestedChange }) => {
  return (
    <div className="mb-6">
      <h6 className="text-xl font-semibold mb-4">Profile Summary</h6>
      <div className="flex flex-col gap-2">
        <textarea
          id="profileSummary"
          value={profileSummary}
          onChange={(e) => handleNestedChange("profileSummary", e.target.value)}
          className="border rounded p-2 min-h-[100px]"
          placeholder="Write a brief summary about yourself..."
        />
      </div>
    </div>
  );
};

export default ProfileSummarySection;
