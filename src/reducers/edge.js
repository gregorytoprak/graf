import { FULL_SELECT, RESET_COLORS, SET_COLOR } from "../actions/meta";
import {
  START_EDGE,
  COMPLETE_EDGE,
  SELECT_EDGE,
  MOVE_CONTROL,
  RESET_CONTROL
} from "../actions/edge";

const initialState = {
  id: undefined,
  color: null,
  startNodeId: undefined,
  endNodeId: undefined,
  controlx: undefined,
  controly: undefined,
  complete: false,
  curved: false,
  selected: false,
  moving: false
};

const edge = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_EDGE:
      return {
        ...state,
        selected: state.moving ? state.selected : !state.selected,
        moving: false
      };
    case RESET_COLORS:
      return {
        ...state,
        color: state.selected ? null : state.color
      };
    case SET_COLOR:
      return {
        ...state,
        color: state.selected ? action.payload.color : state.color
      };
    case START_EDGE:
    case COMPLETE_EDGE:
    case MOVE_CONTROL:
    case RESET_CONTROL:
    case FULL_SELECT:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default edge;
