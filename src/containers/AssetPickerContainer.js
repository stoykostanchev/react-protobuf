import React from "react";
import AssetContainer from "./AssetContainer";
import AssetPicker from "../components/AssetPicker";
import store from "./../store";
import { getJokes } from "./../actions";

const AssetPickerContainer = AssetContainer(data => {
  const props = {
    items: data.items.map(id => data.itemsMap[id]),
    selectItem: id => store.dispatch({ type: "SELECT_ASSET", payload: id }),
    loadExtraItems: getJokes
  };
  return <AssetPicker {...props}></AssetPicker>;
});

export default AssetPickerContainer;
