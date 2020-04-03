import React from "react";

const Asset = ({ El, ref }, AssetChild) => item => (
  <El
    className={`asset type-${item.type.toLowerCase()}`}
    key={item.id}
    ref={ref}
  >
    <h2>{item.name}</h2>
    <p>
      <span className="info">{item.duration} minutes</span>
      <span className="info">{item.type}</span>
    </p>
    {AssetChild && <AssetChild></AssetChild>}
  </El>
);

export default Asset;
