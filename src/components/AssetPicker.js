import React from "react";
import Asset from "./Asset";

export const dummyItemGen = (_, i) => ({
  id: i,
  name: "Dummy asset name!",
  duration: 4,
  type: "Video"
});

const AssetPicker = () => {
  const items = new Array(4).fill(1).map(dummyItemGen);

  return <ul className="asset-picker">{items.map(Asset("li"))}</ul>;
};

export default AssetPicker;
