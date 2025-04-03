import React from "react";

const EducationSection = ({ data, onEdit }) => (
  <>
    {data?.map((edu, index) => (
      <div key={index} className="mb-4 p-4">
        <h3 className="text-lg font-semibold">{edu.degree}</h3>
        <p>
          <strong>Institution:</strong> {edu.institution}
        </p>
        <p>
          <strong>Duration:</strong> {edu.year.start} - {edu.year.end}
        </p>
      </div>
    ))}
  </>
);

export default EducationSection;
