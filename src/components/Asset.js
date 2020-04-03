import React from "react";

const Asset = El => item => (
  <El
    className={`asset type-${item.type.toLowerCase().replace(" ", "_")}`}
    key={item.id}
    item={item}
  >
    <h2>{item.name}</h2>
    <p>
      <span className="info">{item.duration} minutes</span>
      <span className="info">{item.type}</span>
    </p>
  </El>
);

export default Asset;
