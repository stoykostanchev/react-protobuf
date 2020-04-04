import React from "react";
import AssetPreview from "../components/AssetPreview";
import AssetContainer from "./AssetContainer";
import store from "./../store";
import { deselectAsset } from "./../actions";

const AssetPreviewContainer = AssetContainer(data => {
  const props = {
    selectedItems: data.selectedItems.map(id => data.itemsMap[id])
    deselectItem: (id) => store.dispatch(deselectAsset(id)),
  };
  return <AssetPreview {...props}></AssetPreview>;
});

export default AssetPreviewContainer;
