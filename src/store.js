import { createStore } from "redux";
import items from "./assets";

const getInitialState = () => {
  return {
    itemsMap: items.reduce((acc, i) => {
      acc[i.id] = i;
      return acc;
    }, {}),
    selectedItems: []
    items: items.map((i) => i.id),
  };
};

// redux logic
const reducer = (state, action) => {
  if (action.type === "SELECT_ASSET") {
    return {
      ...state,
      items: state.items.filter((i) => i !== action.payload),
      selectedItems: [action.payload, ...state.selectedItems],
    };
  }
  if (action.type === "DESELECT_ASSET") {
    return {
      ...state,
      items: [action.payload, ...state.items],
      selectedItems: state.selectedItems.filter((i) => i !== action.payload),
    };
  }
  return state;
};

const store = createStore(reducer, getInitialState());

export default store;
