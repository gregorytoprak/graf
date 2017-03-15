import node from "./node";
import { FULL_SELECT, RESET_COLORS, SET_COLOR } from "../actions/meta";
import {
  CREATE_NODE,
  DELETE_NODE,
  SELECT_NODE,
  MOVE_NODE
} from "../actions/node";

const initialState = [];

const nodes = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NODE:
      return [...state, node(undefined, action)];
    case DELETE_NODE:
      return state.filter(nd => nd.id !== action.payload.id);
    case FULL_SELECT:
    case RESET_COLORS:
    case SET_COLOR:
      return state.map(nd => node(nd, action));
    case SELECT_NODE:
    case MOVE_NODE:
      return state.map(
        nd => nd.id === action.payload.id ? node(nd, action) : nd
      );
    default:
      return state;
  }
};

export default nodes;
