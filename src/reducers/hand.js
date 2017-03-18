import { CLEAR } from "../actions/meta";
import {
  EMPTY_HAND,
  PAN_HAND,
  MOVE_NODE_HAND,
  START_EDGE_HAND,
  MOVE_EDGE_HANDLE_HAND
} from "../actions/hand";

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
      return action.payload;
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default sheet;
