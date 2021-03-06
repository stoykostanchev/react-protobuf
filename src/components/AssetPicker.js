import React from "react";
import Asset from "./Asset";
import { useDrag } from "react-dnd";
import { ASSET_DRAG } from "../constants";

const AssetPicker = ({ items, selectItem }) => {
  return (
    <ul className="asset-picker">
      {items.map(
        Asset((props) => {
          const [, drag] = useDrag({
            item: {
              type: ASSET_DRAG,
              id: props.item.id,
            },
            end: (props, monitor) => {
              if (monitor.didDrop()) {
                selectItem(props.id);
              }
            },
          });
          return (
            <li {...props} ref={drag}>
              {props.children}
            </li>
          );
        })
      )}
    </ul>
  );
};

export default AssetPicker;
