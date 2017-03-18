import { makeId } from "../utils";

export const START_EDGE = "START_EDGE";
export const COMPLETE_EDGE = "COMPLETE_EDGE";
export const DELETE_EDGE = "DELETE_EDGE";
export const DROP_EDGE = "DROP_EDGE";
export const RESET_CONTROL = "RESET_CONTROL";
export const MOVE_CONTROL = "MOVE_CONTROL";
export const SELECT_EDGE = "SELECT_EDGE";

export const startEdge = startNodeId => ({
  type: START_EDGE,
  payload: { id: makeId("edge"), startNodeId }
});

export const completeEdge = endNodeId => ({
  type: COMPLETE_EDGE,
  payload: { endNodeId }
});

export const deleteEdge = id => ({
  type: DELETE_EDGE,
  payload: { id }
});

export const dropEdge = () => ({
  type: DROP_EDGE,
  payload: {}
});

export const resetControl = id => ({
  type: RESET_CONTROL,
  payload: { id }
});

export const moveControl = (id, newControlPt) => ({
  type: MOVE_CONTROL,
  payload: { id, newControlPt }
});

export const selectEdge = id => ({
  type: SELECT_EDGE,
  payload: { id }
});
