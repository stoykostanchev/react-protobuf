import React from "react";
import AssetPreview from "../components/AssetPreview";
import AssetContainer from "./AssetContainer";

const AssetPreviewContainer = AssetContainer(data => {
  const props = {
    selectedItems: data.selectedItems.map(id => data.itemsMap[id])
  };
  return <AssetPreview {...props}></AssetPreview>;
});

export default AssetPreviewContainer;
