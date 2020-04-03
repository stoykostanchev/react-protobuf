import React from "react";
import Asset from "./Asset";
import store from "../store";
import { useDrop } from "react-dnd";

const itemView = item =>
  Asset({ El: "li" }, () => (
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
  const [, drop] = useDrop({
    accept: "ASSET_DRAG"
  });
  return (
    <ul ref={drop} className="asset-preview">
      {selectedItems.map(itemView)}
    </ul>
  );
};

export default AssetPreview;
