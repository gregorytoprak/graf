import {
  CREATE_AXIS,
  ALIGN_AXIS,
  MOVE_AXIS_ORIGIN,
  MOVE_AXIS_UNIT,
  SELECT_AXIS
} from "../actions/axis";
import { vec } from "../utils";

const initialState = {
  id: undefined,
  num: 0,
  originPt: [0, 0],
  unitLoc: [0, -3],
  selected: false,
  moving: false
};

const axis = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_AXIS:
      const { id, num, initOriginPt } = action.payload;
      return {
        ...state,
        id: id,
        num: num,
        originPt: initOriginPt
      };
    case ALIGN_AXIS:
      const [x, y] = state.unitLoc;
      const baseDir = Math.abs(x) <= y
        ? [0, 1]
        : Math.abs(y) <= x ? [1, 0] : Math.abs(x) <= -y ? [0, -1] : [-1, 0];
      const len = vec.len(state.unitLoc);
      return {
        ...state,
        unitLoc: vec.scl(len, baseDir)
      };
    case MOVE_AXIS_ORIGIN:
      const { newOriginPt } = action.payload;
      return {
        ...state,
        originPt: newOriginPt,
        moving: true
      };
    case MOVE_AXIS_UNIT:
      const { newUnitLoc } = action.payload;
      return {
        ...state,
        unitLoc: newUnitLoc,
        moving: true
      };
    case SELECT_AXIS:
      return state.moving
        ? {
            ...state,
            moving: false
          }
        : {
            ...state,
            selected: !state.selected
          };
    default:
      return state;
  }
};

export default axis;
