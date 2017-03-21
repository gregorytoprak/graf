import { makeId } from "../utils";

export const CREATE_AXIS = "CREATE_AXIS";
export const DELETE_AXIS = "DELETE_AXIS";
export const ALIGN_AXIS = "ALIGN_AXIS";
export const MOVE_AXIS_ORIGIN = "MOVE_AXIS_ORIGIN";
export const MOVE_AXIS_UNIT = "MOVE_AXIS_UNIT";
export const SELECT_AXIS = "SELECT_AXIS";

export const createAxis = (num, initOriginPt) => ({
  type: CREATE_AXIS,
  payload: { id: makeId("axis"), num, initOriginPt }
});

export const deleteAxis = id => ({
  type: DELETE_AXIS,
  payload: { id }
});

export const alignAxis = id => ({
  type: ALIGN_AXIS,
  payload: { id }
});

export const moveAxisOrigin = (id, newOriginPt, moving = true) => ({
  type: MOVE_AXIS_ORIGIN,
  payload: { id, newOriginPt, moving }
});

export const moveAxisUnit = (id, newUnitLoc, moving = true) => ({
  type: MOVE_AXIS_UNIT,
  payload: { id, newUnitLoc, moving }
});

export const selectAxis = id => ({
  type: SELECT_AXIS,
  payload: { id }
});
