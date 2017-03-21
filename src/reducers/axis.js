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
      return {
        ...state,
        unitLoc: [0, -vec.len(state.unitLoc)]
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
