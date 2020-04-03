import React from "react";
import AssetContainer from "./AssetContainer";
import AssetPicker from "../components/AssetPicker";

const AssetPickerContainer = AssetContainer(data => {
  const props = {
    items: data.items.map(id => data.itemsMap[id])
  };
  return <AssetPicker {...props}></AssetPicker>;
});

export default AssetPickerContainer;
