import {
  CREATE_AXIS,
  ALIGN_AXIS,
  MOVE_AXIS_ORIGIN,
  MOVE_AXIS_UNIT,
  SELECT_AXIS
} from "../actions/axis";
import { FULL_SELECT, SET_LEGS } from "../actions/other";
import { vec } from "../utils";

const initialState = {
  id: undefined,
  num: 6,
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
      const compassQuadrants = [
        { coords: Math.abs(x) <= y, dir: [0, 1] },
        { coords: Math.abs(y) <= x, dir: [1, 0] },
        { coords: Math.abs(x) <= -y, dir: [0, -1] },
        { coords: Math.abs(y) <= -x, dir: [-1, 0] }
      ];
      const baseDir = compassQuadrants.find(quad => quad.coords).dir;
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
        moving: action.payload.moving
      };
    case MOVE_AXIS_UNIT:
      const { newUnitLoc } = action.payload;
      return {
        ...state,
        unitLoc: newUnitLoc,
        moving: action.payload.moving
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
    case FULL_SELECT:
      const { selectStatus } = action.payload;
      return {
        ...state,
        selected: selectStatus
      };
    case SET_LEGS:
      const { numLegs } = action.payload;
      return {
        ...state,
        num: numLegs
      };

    default:
      return state;
  }
};

export default axis;
