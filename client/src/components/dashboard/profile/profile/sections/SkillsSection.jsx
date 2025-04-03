import React from "react";

const SkillsSection = ({ data, onEdit }) => (
  <ul className="list list-disc px-10 py-4">
    {data?.map((skill, index) => (
      <li key={index}>{skill}</li>
    ))}
  </ul>
);

export default SkillsSection;
