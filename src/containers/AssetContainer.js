const dummyItemGen = (_, i) => ({
  id: i,
  name: "Dummy asset name!",
  duration: 4,
  type: "Video"
});

const AssetContainer = component => () => {
  const selectedItems = new Array(4).fill(1).map(dummyItemGen);
  selectedItems[0].type = "Article";
  selectedItems[1].type = "Article";
  selectedItems[2].type = "Document";

  return component({
    items: new Array(4).fill(1).map(dummyItemGen),
    selectedItems
  });
};

export default AssetContainer;
