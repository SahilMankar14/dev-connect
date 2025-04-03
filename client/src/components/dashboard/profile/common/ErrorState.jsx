import React from "react";

const ErrorState = ({ message }) => (
  <div className="p-4 text-red-500 bg-red-50 border border-red-200 rounded-lg">
    <h3 className="font-bold mb-2">Error</h3>
    <p>{message || "An error occurred. Please try again later."}</p>
  </div>
);

export default ErrorState;
