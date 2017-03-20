import node from "./node";
import {
  CREATE_NODE,
  DELETE_NODE,
  MOVE_NODE,
  SELECT_NODE
} from "../actions/node";
import { FULL_SELECT, SET_COLOR, CLEAR } from "../actions/other";

const initialState = [];

const nodes = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NODE:
      return [...state, node(undefined, action)];
    case DELETE_NODE:
      return state.filter(nd => nd.id !== action.payload.id);
    case MOVE_NODE:
    case SELECT_NODE:
      return state.map(
        nd => nd.id === action.payload.id ? node(nd, action) : nd
      );
    case FULL_SELECT:
      return state.map(nd => node(nd, action));
    case SET_COLOR:
      return state.map(nd => nd.selected ? node(nd, action) : nd);
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default nodes;
