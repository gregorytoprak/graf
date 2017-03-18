import { makeId } from "../utils";

export const START_EDGE = "START_EDGE";
export const COMPLETE_EDGE = "COMPLETE_EDGE";
export const DELETE_EDGE = "DELETE_EDGE";
export const DROP_EDGE = "DROP_EDGE";
export const RESET_EDGE_HANDLE = "RESET_EDGE_HANDLE";
export const MOVE_EDGE_HANDLE = "MOVE_EDGE_HANDLE";
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

export const resetEdgeHandle = id => ({
  type: RESET_EDGE_HANDLE,
  payload: { id }
});

export const moveEdgeHandle = (id, newHandleLoc) => ({
  type: MOVE_EDGE_HANDLE,
  payload: { id, newHandleLoc }
});

export const selectEdge = id => ({
  type: SELECT_EDGE,
  payload: { id }
});
