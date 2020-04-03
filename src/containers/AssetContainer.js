export const dummyItemGen = (_, i) => ({
  id: i,
  name: "Dummy asset name!",
  duration: 4,
  type: "Video"
});

const AssetContainer = component => () => {
  return component({
    items: new Array(4).fill(1).map(dummyItemGen)
  });
};

export default AssetContainer;
