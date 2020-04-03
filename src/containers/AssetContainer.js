const dummyItemGen = (_, i) => ({
  id: i,
  name: "Dummy asset name!",
  duration: 4,
  type: "Video"
});

const AssetContainer = component => () => {
  const items = new Array(8).fill(1).map(dummyItemGen);
  items[4].type = "Article";
  items[5].type = "Article";
  items[6].type = "Document";

  return component({
    itemsMap: items.reduce((acc, i) => {
      acc[i.id] = i;
      return acc;
    }, {}),
    items: [0, 1, 2, 3],
    selectedItems: [4, 5, 6, 7]
  });
};

export default AssetContainer;
