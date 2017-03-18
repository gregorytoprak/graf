import {
  START_EDGE,
  COMPLETE_EDGE,
  RESET_CONTROL,
  MOVE_CONTROL,
  SELECT_EDGE
} from "../actions/edge";
import { FULL_SELECT, SET_COLOR } from "../actions/meta";

const initialState = {
  id: undefined,
  startNodeId: undefined,
  endNodeId: undefined,
  controlPt: [0, 0],
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
        controlPt: [0, action.payload.endNodeId === state.startNodeId ? -2 : 0]
      };
    case RESET_CONTROL:
      return {
        ...state,
        controlPt: [0, state.endNodeId === state.startNodeId ? -2 : 0],
        selected: false
      };
    case MOVE_CONTROL:
      return {
        ...state,
        controlPt: action.payload.newControlPt,
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
