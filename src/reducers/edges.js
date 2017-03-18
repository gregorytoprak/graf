import edge from "./edge";
import {
  START_EDGE,
  COMPLETE_EDGE,
  DELETE_EDGE,
  DROP_EDGE,
  RESET_EDGE_HANDLE,
  MOVE_EDGE_HANDLE,
  SELECT_EDGE
} from "../actions/edge";
import { DELETE_NODE } from "../actions/node";
import { FULL_SELECT, SET_COLOR, CLEAR } from "../actions/meta";

const initialState = [];

const edges = (state = initialState, action) => {
  switch (action.type) {
    case START_EDGE:
      return [...state, edge(undefined, action)];
    case COMPLETE_EDGE:
      return state.map(ed => !ed.endNodeId ? edge(ed, action) : ed);
    case DELETE_EDGE:
      return state.filter(ed => ed.id !== action.payload.id);
    case DROP_EDGE:
      return state.filter(ed => ed.endNodeId);
    case RESET_EDGE_HANDLE:
    case MOVE_EDGE_HANDLE:
    case SELECT_EDGE:
      return state.map(
        ed => ed.id === action.payload.id ? edge(ed, action) : ed
      );
    case DELETE_NODE:
      return state.filter(
        ed =>
          ed.startNodeId !== action.payload.id &&
          ed.endNodeId !== action.payload.id
      );
    case FULL_SELECT:
    case SET_COLOR:
      return state.map(ed => edge(ed, action));
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default edges;
