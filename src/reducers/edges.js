import edge from "./edge";
import { CLEAR } from "../actions/meta";
import { FULL_SELECT, RESET_COLORS, SET_COLOR } from "../actions/meta";
import { DELETE_NODE } from "../actions/node";
import {
  START_EDGE,
  COMPLETE_EDGE,
  DELETE_EDGE,
  SELECT_EDGE,
  MOVE_CONTROL,
  RESET_CONTROL
} from "../actions/edge";

const initialState = [];

const edges = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_NODE:
      return state.filter(
        ed =>
          ed.startNodeId !== action.payload.id &&
          ed.endNodeId !== action.payload.id
      );
    case START_EDGE:
      return [...state, edge(undefined, action)];
    case DELETE_EDGE:
      return state.filter(ed => ed.id !== action.payload.id);
    case FULL_SELECT:
    case RESET_COLORS:
    case SET_COLOR:
      return state.map(ed => edge(ed, action));
    case COMPLETE_EDGE:
    case SELECT_EDGE:
    case MOVE_CONTROL:
    case RESET_CONTROL:
      return state.map(
        ed => ed.id === action.payload.id ? edge(ed, action) : ed
      );
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default edges;
