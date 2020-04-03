import React from "react";
import Summary from "../components/Summary";
import AssetContainer from "./AssetContainer";

const SummaryContainer = AssetContainer(({ selectedItems, itemsMap }) => {
  const props = {
    totalCount: selectedItems.length,
    categoriesMap: selectedItems.reduce((st, id) => {
      const item = itemsMap[id];
      return {
        ...st,
        [item.type]: (st[item.type] || 0) + 1
      };
    }, {})
  };
  return <Summary {...props}></Summary>;
});

export default SummaryContainer;
