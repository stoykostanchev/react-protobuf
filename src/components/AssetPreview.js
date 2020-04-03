import React from "react";
import Asset from "./Asset";
import store from "../store";
import { useDrop } from "react-dnd";

const itemView = Asset(props => {
  const { item } = props;
  return (
    <li {...props}>
      {props.children}
      <button
        key={item.id}
        className="remove-asset"
        onClick={() => {
          store.dispatch({ type: "DESELECT_ASSET", payload: item.id });
        }}
      >
        x
      </button>
    </li>
  );
});

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
