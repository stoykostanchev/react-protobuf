import React from "react";

export const AssetPickerItem = Cmp => item => (
  <Cmp className={`asset type-${item.type.toLowerCase()}`} key={item.id}>
    <h2>{item.name}</h2>
    <p>
      <span className="info">{item.duration} minutes</span>
      <span className="info">{item.type}</span>
    </p>
  </Cmp>
);

export const dummyItemGen = (_, i) => ({
  id: i,
  name: "Dummy asset name!",
  duration: 4,
  type: "Video"
});

const AssetPicker = () => {
  const items = new Array(4).fill(1).map(dummyItemGen);

  return <ul className="asset-picker">{items.map(AssetPickerItem("li"))}</ul>;
};

export default AssetPicker;
