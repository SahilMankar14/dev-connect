import React from "react";

const DetailsList = ({ data, renderItem }) => (
  <div className="p-4">
    <ul className="space-y-2 grid grid-cols-2">
      {data.map((item, index) => renderItem(item, index))}
    </ul>
  </div>
);

export default DetailsList;
