import React from "react";
import Asset from "./Asset";
import { useDrag } from "react-dnd";

const AssetPicker = ({ items }) => {
  const [, drag] = useDrag({
    item: {
      type: "ASSET_DRAG"
    },
    end: (props, monitor) => {
      console.log("did drop?", monitor.didDrop());
      console.log("item", monitor.getItem());
      console.log("getDrRes", monitor.getDropResult());
      console.log("props", props);
      console.log("Dragging ended");
    }
  });
  return (
    <ul ref={drag} className="asset-picker">
      {items.map(Asset({ El: "li" }))}
    </ul>
  );
};

export default AssetPicker;
