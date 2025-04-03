import React from "react";
import DetailsList from "../DetailsList";

const ContactDetailsSection = ({ data, onEdit }) => (
  <DetailsList
    data={[
      { label: "Phone", value: data?.phone },
      { label: "Email", value: data?.email },
      { label: "Address", value: data?.address },
    ]}
    renderItem={(item, index) => (
      <li key={index}>
        <div className="font-semibold">{item.label}:</div>
        <div>{item.value || "N/A"}</div>
      </li>
    )}
  />
);

export default ContactDetailsSection;
