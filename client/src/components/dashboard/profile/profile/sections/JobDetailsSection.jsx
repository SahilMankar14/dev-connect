import React from "react";
import DetailsList from "../DetailsList";

const JobDetailsSection = ({ data, onEdit }) => (
  <DetailsList
    data={[
      { label: "Title", value: data?.title },
      { label: "Company", value: data?.company },
      { label: "Designation", value: data?.designation },
      { label: "Location", value: data?.location },
      { label: "Experience", value: data?.experience },
    ]}
    renderItem={(item, index) => (
      <li key={index}>
        <div className="font-semibold">{item.label}:</div>
        <div>{item.value || "N/A"}</div>
      </li>
    )}
  />
);

export default JobDetailsSection;
