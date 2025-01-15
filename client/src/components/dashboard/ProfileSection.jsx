import React from "react";
import { useAuth } from "../../hooks/useAuth";
import Avatar from "../../assets/Avatar.jpeg";

const ProfileSection = () => {
  const { user } = useAuth();

  return (
    <div className=" p-4 ">
      <div className="flex p-2 mb-2 bg-white rounded-xl">
        <div className="mr-4">
          <img src={Avatar} alt="Image" className="w-40 h-40 rounded-full" />
        </div>
        <div className="w-1/2">
          <h1 className="mb-2 ">
            <span className="font-bold">Name:</span> {user?.name}
          </h1>
          <p className="mb-2">
            <span className="font-bold">Email:</span> {user?.email}
          </p>
          <p className="mb-2">
            <span className="font-bold">Phone No:</span>
            {user?.phoneno}
          </p>
        </div>
      </div>
      <div className="rounded-lg pb-4"></div>
    </div>
  );
};

export default ProfileSection;
