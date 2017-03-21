import { makeId } from "../utils";

export const CREATE_AXIS = "CREATE_AXIS";
export const DELETE_AXIS = "DELETE_AXIS";
export const MOVE_AXIS_ORIGIN = "MOVE_AXIS_ORIGIN";
export const MOVE_AXIS_UNIT = "MOVE_AXIS_UNIT";
export const SELECT_AXIS = "SELECT_AXIS";

export const createAxis = (num, initOriginPt, initUnitPt) => ({
  type: CREATE_AXIS,
  payload: { id: makeId("axis"), num, initOriginPt, initUnitPt }
});

export const deleteAxis = id => ({
  type: DELETE_AXIS,
  payload: { id }
});

export const moveAxisOrigin = (id, newOriginPt) => ({
  type: MOVE_AXIS_ORIGIN,
  payload: { id, newOriginPt }
});

export const moveAxisUnit = (id, newUnitPt) => ({
  type: MOVE_AXIS_UNIT,
  payload: { id, newUnitPt }
});

export const selectAxis = id => ({
  type: SELECT_AXIS,
  payload: { id }
});
