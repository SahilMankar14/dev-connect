import React, { useEffect, useState } from "react";
import ProfileSection from "../components/dashboard/ProfileSection";
import PostSection from "../components/dashboard/PostSection";
import ConnectionsSection from "../components/dashboard/ConnectionsSection";
import SettingsSection from "../components/dashboard/SettingsSection";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("profile");

  useEffect(() => {
    console.log(activeItem);
    console.log("Dashboard");
  }, [activeItem]);

  const navItems = ["profile", "posts", "connections", "settings"];

  const renderNavItems = () => {
    switch (activeItem) {
      case "profile":
        return <ProfileSection />;
      case "posts":
        return <PostSection />;
      case "connections":
        return <ConnectionsSection />;
      case "settings":
        return <SettingsSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="flex ">
      <aside className="w-1/5 border-r 4">
        {navItems.map((item) => (
          <div
            key={item}
            className={`m-4 p-2 cursor-pointer ${
              activeItem === item
                ? "border-r-4 border-blue-500 text-blue-500"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveItem(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </div>
        ))}
      </aside>
      <main className="w-4/5 p-4">{renderNavItems()}</main>
    </div>
  );
};

export default Dashboard;
