import React from "react";
import Asset from "./Asset";

const itemView = item => [
  Asset("li")(item),
  <button key={item.id} className="remove-asset">
    x
  </button>
];

const AssetPreview = ({ selectedItems }) => {
  return <ul className="asset-preview">{selectedItems.map(itemView)}</ul>;
};

export default AssetPreview;
