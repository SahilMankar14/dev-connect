import React from "react";
import DetailsList from "../DetailsList";

const PersonalDetailsSection = ({ data, onEdit }) => (
  <>
    <DetailsList
      data={[
        { label: "Gender", value: data?.gender },
        { label: "Marital Status", value: data?.maritalStatus },
        {
          label: "Date of Birth",
          value: data?.dob ? new Date(data.dob).toLocaleDateString() : null,
        },
        { label: "Work Permit", value: data?.workPermit },
      ]}
      renderItem={(item, index) => (
        <li key={index}>
          <div className="font-semibold">{item.label}:</div>
          <div>{item.value || "N/A"}</div>
        </li>
      )}
    />

    {/* Languages */}
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Languages</h3>
      {data?.languages?.map((lang, index) => (
        <div key={index} className="mb-2">
          <strong>{lang.name}</strong>
          <div className="pl-4 flex gap-4">
            <p>Read: {lang.proficiency.read ? "Yes" : "No"}</p>
            <p>Write: {lang.proficiency.write ? "Yes" : "No"}</p>
            <p>Speak: {lang.proficiency.speak ? "Yes" : "No"}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default PersonalDetailsSection;
