import { FULL_SELECT, RESET_COLORS, SET_COLOR } from "../actions/meta";
import { CREATE_NODE, SELECT_NODE, MOVE_NODE } from "../actions/node";

const initialState = {
  id: undefined,
  color: null,
  nodePt: [0, 0],
  selected: false,
  moving: false
};

const node = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NODE:
      return {
        ...state,
        id: action.payload.id,
        nodePt: action.payload.nodePt
      };
    case FULL_SELECT:
      return {
        ...state,
        ...action.payload
      };
    case SELECT_NODE:
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
    case MOVE_NODE:
      return {
        ...state,
        nodePt: action.payload.newNodePt,
        moving: true
      };
    default:
      return state;
  }
};

export default node;
