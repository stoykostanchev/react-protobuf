import { createStore } from "redux";

const dummyItemGen = (_, i) => ({
  id: i,
  name: "Dummy asset name!",
  duration: 4,
  type: "Video"
});

const getInitialState = () => {
  const items = new Array(8).fill(1).map(dummyItemGen);
  items[4].type = "Article";
  items[5].type = "Article";
  items[6].type = "Document";

  return {
    itemsMap: items.reduce((acc, i) => {
      acc[i.id] = i;
      return acc;
    }, {}),
    items: [0, 1, 2, 3],
    selectedItems: [4, 5, 6, 7]
  };
};

// redux logic
const reducer = (state, action) => {
  if (action.type === "DESELECT_ASSET") {
    return {
      ...state,
      items: [action.payload, ...state.items],
      selectedItems: state.selectedItems.filter(i => i !== action.payload)
    };
  }
  return state;
};

const store = createStore(reducer, getInitialState());

export default store;
