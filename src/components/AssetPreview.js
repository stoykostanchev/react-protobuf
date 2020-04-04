import React from "react";
import Asset from "./Asset";
import { useDrop } from "react-dnd";
import { ASSET_DRAG } from "../constants";

const itemView = (deselectItem) =>
  Asset((props) => {
    const { item } = props;
    return (
      <li {...props}>
        {props.children}
        <button
          key={item.id}
          className="remove-asset"
          onClick={() => deselectItem(item.id)}
        >
          x
        </button>
      </li>
    );
  });

const AssetPreview = ({ selectedItems, deselectItem }) => {
  const [, drop] = useDrop({
    accept: ASSET_DRAG,
  });
  return (
    <ul ref={drop} className="asset-preview">
      {selectedItems.map(itemView(deselectItem))}
    </ul>
  );
};

export default AssetPreview;
