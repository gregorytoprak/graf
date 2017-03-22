import {
  EMPTY_HAND,
  PAN_HAND,
  MOVE_NODE_HAND,
  START_EDGE_HAND,
  MOVE_EDGE_HANDLE_HAND,
  MOVE_AXIS_ORIGIN_HAND,
  MOVE_AXIS_UNIT_HAND,
  HAND_MOVING
} from "../actions/hand";
import { CLEAR } from "../actions/other";

const initialState = {
  palm: EMPTY_HAND
};

const sheet = (state = initialState, action) => {
  switch (action.type) {
    case EMPTY_HAND:
    case PAN_HAND:
    case MOVE_NODE_HAND:
    case START_EDGE_HAND:
    case MOVE_EDGE_HANDLE_HAND:
    case MOVE_AXIS_ORIGIN_HAND:
    case MOVE_AXIS_UNIT_HAND:
      return action.payload;
    case HAND_MOVING:
      return { ...state, moving: true };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default sheet;
