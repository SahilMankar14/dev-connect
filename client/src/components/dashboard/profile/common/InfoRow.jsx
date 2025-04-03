import React from "react";

const InfoRow = ({ label, value }) => (
  <p className="mb-2">
    <span className="font-bold">{label}:</span> {value || "N/A"}
  </p>
);

export default InfoRow;
