import React from "react";
import { AssetPickerItem, dummyItemGen } from "./AssetPicker";

const itemView = item => [
  AssetPickerItem("li")(item),
  <button key={item.id} className="remove-asset">
    x
  </button>
];

const AssetPreview = () => {
  const items = new Array(4).fill(1).map(dummyItemGen);
  items[0].type = "Article";
  items[1].type = "Article";
  items[2].type = "Document";

  return <ul className="asset-preview">{items.map(itemView)}</ul>;
};

export default AssetPreview;
