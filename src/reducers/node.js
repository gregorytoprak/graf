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
  const { color, selected, moving } = state;
  switch (action.type) {
    case CREATE_NODE:
      const { initId, initNodePt } = action.payload;
      return {
        ...state,
        id: initId,
        nodePt: initNodePt
      };
    case MOVE_NODE:
      const { newNodePt } = action.payload;
      return {
        ...state,
        nodePt: newNodePt,
        moving: true
      };
    case FULL_SELECT:
      return {
        ...state,
        ...action.payload
      };
    case SELECT_NODE:
      return {
        ...state,
        selected: moving ? selected : !selected,
        moving: false
      };
    case RESET_COLORS:
      return {
        ...state,
        color: selected ? null : color
      };
    case SET_COLOR:
      const { newColor } = action.payload;
      return {
        ...state,
        color: selected ? newColor : color
      };
    default:
      return state;
  }
};

export default node;
