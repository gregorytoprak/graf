import {
  START_EDGE,
  COMPLETE_EDGE,
  TOGGLE_ARROW,
  RESET_EDGE_HANDLE,
  MOVE_EDGE_HANDLE,
  SELECT_EDGE
} from "../actions/edge";
import { FULL_SELECT, SET_COLOR } from "../actions/other";

const initialState = {
  id: undefined,
  startNodeId: undefined,
  endNodeId: undefined,
  handleLoc: [0, 0],
  color: null,
  arrow: true,
  selected: false,
  moving: false
};

const edge = (state = initialState, action) => {
  switch (action.type) {
    case START_EDGE:
      const { id, startNodeId } = action.payload;
      return {
        ...state,
        id: id,
        startNodeId: startNodeId
      };
    case COMPLETE_EDGE:
      const { endNodeId } = action.payload;
      return {
        ...state,
        endNodeId: endNodeId,
        handleLoc: [0, 0],
        selected: endNodeId === state.startNodeId
      };
    case TOGGLE_ARROW:
      return {
        ...state,
        arrow: !state.arrow
      };
    case RESET_EDGE_HANDLE:
      return {
        ...state,
        handleLoc: [0, 0]
      };
    case MOVE_EDGE_HANDLE:
      const { newHandleLoc } = action.payload;
      return {
        ...state,
        handleLoc: newHandleLoc,
        moving: true
      };
    case SELECT_EDGE:
      return state.moving
        ? {
            ...state,
            moving: false
          }
        : {
            ...state,
            selected: !state.selected
          };
    case FULL_SELECT:
      const { selectStatus } = action.payload;
      return {
        ...state,
        selected: selectStatus
      };
    case SET_COLOR:
      const { newColor } = action.payload;
      return {
        ...state,
        color: newColor
      };
    default:
      return state;
  }
};

export default edge;
