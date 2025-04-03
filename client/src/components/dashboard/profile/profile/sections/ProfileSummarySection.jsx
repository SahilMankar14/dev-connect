import React from "react";

const ProfileSummarySection = ({ data, onEdit }) => (
  <p className="p-4">{data || "No summary available"}</p>
);

export default ProfileSummarySection;
