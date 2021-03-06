import axis from "./axis";
import {
  CREATE_AXIS,
  ALIGN_AXIS,
  DELETE_AXIS,
  MOVE_AXIS_ORIGIN,
  MOVE_AXIS_UNIT,
  SELECT_AXIS
} from "../actions/axis";
import { FULL_SELECT, SET_LEGS, CLEAR } from "../actions/other";

const initialState = [];

const axes = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_AXIS:
      return [...state, axis(undefined, action)];
    case DELETE_AXIS:
      return state.filter(ax => ax.id !== action.payload.id);
    case ALIGN_AXIS:
    case MOVE_AXIS_ORIGIN:
    case MOVE_AXIS_UNIT:
    case SELECT_AXIS:
      return state.map(
        ax => ax.id === action.payload.id ? axis(ax, action) : ax
      );
    case FULL_SELECT:
      return state.map(ax => axis(ax, action));
    case SET_LEGS:
      return state.map(ax => ax.selected ? axis(ax, action) : ax);
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default axes;
