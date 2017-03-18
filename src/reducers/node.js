import { CREATE_NODE, MOVE_NODE, SELECT_NODE } from "../actions/node";
import { FULL_SELECT, SET_COLOR } from "../actions/meta";

const initialState = {
  id: undefined,
  nodePt: [0, 0],
  color: null,
  selected: false,
  moving: false
};

const node = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NODE:
      const { id, initNodePt } = action.payload;
      return {
        ...state,
        id: id,
        nodePt: initNodePt
      };
    case MOVE_NODE:
      const { newNodePt } = action.payload;
      return {
        ...state,
        nodePt: newNodePt,
        moving: true
      };
    case SELECT_NODE:
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

export default node;
