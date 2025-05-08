import React from "react";

const ProfileHeader = ({ user, openModal }) => (
  <div className="flex justify-end mb-4">
    <button
      className="bg-blue-50 text-black px-4 py-2 rounded-lg shadow transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-md"
      onClick={openModal}
    >
      Create/Edit Profile
    </button>
  </div>
);

export default ProfileHeader;
