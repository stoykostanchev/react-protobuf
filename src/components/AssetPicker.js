import React from "react";
import Asset from "./Asset";

const AssetPicker = ({ items }) => {
  return <ul className="asset-picker">{items.map(Asset("li"))}</ul>;
};

export default AssetPicker;
