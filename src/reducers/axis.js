import {
  CREATE_AXIS,
  MOVE_AXIS_ORIGIN,
  MOVE_AXIS_UNIT,
  SELECT_AXIS
} from "../actions/axis";

const initialState = {
  id: undefined,
  num: 0,
  originPt: [0, 0],
  unitPt: [0, -1],
  selected: false,
  moving: false
};

const axis = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_AXIS:
      const { id, num, initOriginPt, initUnitPt } = action.payload;
      return {
        ...state,
        id: id,
        num: num,
        originPt: initOriginPt,
        unitPt: initUnitPt
      };
    case MOVE_AXIS_ORIGIN:
      const { newOriginPt } = action.payload;
      return {
        ...state,
        originPt: newOriginPt,
        moving: true
      };
    case MOVE_AXIS_UNIT:
      const { newUnitPt } = action.payload;
      return {
        ...state,
        unitPt: newUnitPt,
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
