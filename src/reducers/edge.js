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
  loop: null,
  moved: false,
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
      const loop = action.payload.endNodeId === state.startNodeId;
      return {
        ...state,
        endNodeId: action.payload.endNodeId,
        complete: true,
        loop,
        controlx: loop ? 0 : undefined,
        controly: loop ? -2 : undefined
      };
    case SELECT_EDGE:
      return {
        ...state,
        selected: state.moving ? state.selected : !state.selected,
        moving: false
      };
    case MOVE_CONTROL:
      return {
        ...state,
        controlx: action.payload.controlx,
        controly: action.payload.controly,
        moved: true,
        moving: true
      };
    case RESET_CONTROL:
      return {
        ...state,
        controlx: state.loop ? 0 : undefined,
        controly: state.loop ? -2 : undefined,
        moved: false,
        selected: false
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
