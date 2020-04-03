import React from "react";
import Asset from "./Asset";
import store from "../store";

const itemView = item =>
  Asset("li", () => (
    <button
      key={item.id}
      className="remove-asset"
      onClick={() => {
        store.dispatch({ type: "DESELECT_ASSET", payload: item.id });
      }}
    >
      x
    </button>
  ))(item);

const AssetPreview = ({ selectedItems }) => {
  return <ul className="asset-preview">{selectedItems.map(itemView)}</ul>;
};

export default AssetPreview;
