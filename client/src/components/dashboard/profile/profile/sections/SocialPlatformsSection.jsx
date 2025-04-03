import React from "react";
import DetailsList from "../DetailsList";

const SocialPlatformsSection = ({ data, onEdit }) => (
  <DetailsList
    data={[
      { label: "LinkedIn", value: data?.linkedin },
      { label: "GitHub", value: data?.github },
      { label: "Twitter", value: data?.twitter },
      { label: "Instagram", value: data?.instagram },
    ]}
    renderItem={(item, index) => (
      <li key={index}>
        <div className="font-semibold">{item.label}:</div>
        <a
          href={item.value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline block"
        >
          {item.value || "N/A"}
        </a>
      </li>
    )}
  />
);

export default SocialPlatformsSection;
