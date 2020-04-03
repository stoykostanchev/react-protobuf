import React from "react";

const Asset = (Cmp, AssetChild) => item => (
  <Cmp className={`asset type-${item.type.toLowerCase()}`} key={item.id}>
    <h2>{item.name}</h2>
    <p>
      <span className="info">{item.duration} minutes</span>
      <span className="info">{item.type}</span>
    </p>
    {AssetChild && <AssetChild></AssetChild>}
  </Cmp>
);

export default Asset;
