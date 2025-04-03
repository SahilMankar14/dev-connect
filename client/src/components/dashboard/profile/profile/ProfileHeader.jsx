import React from "react";

const ProfileHeader = ({ user, openModal }) => (
  <div className="flex justify-end mb-4">
    <button
      className="bg-blue-500 px-4 py-2 text-white font-semibold border rounded-lg"
      onClick={openModal}
    >
      Create/Edit Profile
    </button>
  </div>
);

export default ProfileHeader;
