import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="flex-grow bg-gray-50 overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
