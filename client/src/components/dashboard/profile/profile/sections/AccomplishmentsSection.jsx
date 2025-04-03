import React from "react";

const AccomplishmentsSection = ({ data, onEdit }) => (
  <>
    {Object.entries(data || {}).map(([category, items]) => (
      <div key={category} className="p-4">
        <h3 className="text-lg font-semibold capitalize">{category}</h3>
        {items &&
        items.length > 0 &&
        items.some((item) => item && item.trim() !== "") ? (
          <ul className="list-disc pl-6">
            {items.map((item, index) =>
              item && item.trim() !== "" ? (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ) : null
            )}
          </ul>
        ) : (
          <p className="text-gray-500">No {category} available</p>
        )}
      </div>
    ))}
  </>
);

export default AccomplishmentsSection;
