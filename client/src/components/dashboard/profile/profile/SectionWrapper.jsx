import React from "react";
import edit from "../../../../assets/edit.png";

const SectionWrapper = ({ title, handleSectionModal, children }) => (
  <div className="rounded-xl mb-4 bg-white shadow-md">
    <div className="bg-blue-50 p-4 flex items-center justify-between">
      <h2 className="text-xl font-bold">{title}</h2>
      <div>
        <img
          src={edit}
          alt="update info"
          className="w-6 h-6 cursor-pointer"
          onClick={() => handleSectionModal(title)}
        />
      </div>
    </div>
    {children}
  </div>
);

export default SectionWrapper;
