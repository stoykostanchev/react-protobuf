import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import items from "./assets";
import {
  SELECT_ASSET,
  DESELECT_ASSET,
  CHANGED_ACTIVE_JOKE,
  GOT_JOKES,
} from "./actions";

const getInitialState = () => {
  return {
    itemsMap: items.reduce((acc, i) => {
      acc[i.id] = i;
      return acc;
    }, {}),
    items: items.map((i) => i.id),
    selectedItems: [],
    jokes: [],
    activeJoke: 0,
  };
};

// redux logic
const reducer = (state, action) => {
  switch (action.type) {
    case CHANGED_ACTIVE_JOKE: {
      const aji = state.activeJoke + 1;
      return {
        ...state,
        activeJoke: aji > state.jokes.length ? 0 : aji,
      };
    }
    case GOT_JOKES: {
      return {
        ...state,
        jokes: action.payload,
      };
    }
    case SELECT_ASSET: {
      return {
        ...state,
        items: state.items.filter((i) => i !== action.payload),
        selectedItems: [action.payload, ...state.selectedItems],
      };
    }
    case DESELECT_ASSET: {
      return {
        ...state,
        items: [action.payload, ...state.items],
        selectedItems: state.selectedItems.filter((i) => i !== action.payload),
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer, getInitialState(), applyMiddleware(thunk));

export default store;
