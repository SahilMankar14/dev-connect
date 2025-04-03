import React from "react";
import InfoRow from "../common/InfoRow";

const UserBasicInfo = ({ user, avatar }) => (
  <div className="flex p-2 mb-4 bg-white shadow-lg rounded-xl">
    <div className="mr-4">
      <img src={avatar} alt="Profile" className="w-40 h-40 rounded-full" />
    </div>
    <div className="w-1/2">
      <InfoRow label="Name" value={user?.name} />
      <InfoRow label="Email" value={user?.email} />
      <InfoRow label="Phone No" value={user?.phoneno} />
    </div>
  </div>
);

export default UserBasicInfo;
