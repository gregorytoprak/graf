import {
  START_EDGE,
  COMPLETE_EDGE,
  RESET_EDGE_HANDLE,
  MOVE_EDGE_HANDLE,
  SELECT_EDGE
} from "../actions/edge";
import { FULL_SELECT, SET_COLOR } from "../actions/meta";

const initialState = {
  id: undefined,
  startNodeId: undefined,
  endNodeId: undefined,
  handleLoc: [0, 0],
  color: null,
  selected: false,
  moving: false
};

const edge = (state = initialState, action) => {
  switch (action.type) {
    case START_EDGE:
      return {
        ...state,
        id: action.payload.id,
        startNodeId: action.payload.startNodeId
      };
    case COMPLETE_EDGE:
      return {
        ...state,
        endNodeId: action.payload.endNodeId,
        handleLoc: [0, action.payload.endNodeId === state.startNodeId ? -2 : 0]
      };
    case RESET_EDGE_HANDLE:
      return {
        ...state,
        handleLoc: [0, state.endNodeId === state.startNodeId ? -2 : 0],
        selected: false
      };
    case MOVE_EDGE_HANDLE:
      return {
        ...state,
        handleLoc: action.payload.newHandleLoc,
        moving: true
      };
    case SELECT_EDGE:
      return {
        ...state,
        selected: state.moving ? state.selected : !state.selected,
        moving: false
      };
    case FULL_SELECT:
      const { selectStatus } = action.payload;
      return {
        ...state,
        selected: selectStatus
      };
    case SET_COLOR:
      const { newColor } = action.payload;
      return state.selected
        ? {
            ...state,
            color: newColor
          }
        : state;
    default:
      return state;
  }
};

export default edge;
