import { makeId } from "../utils";

export const CREATE_NODE = "CREATE_NODE";
export const DELETE_NODE = "DELETE_NODE";
export const SELECT_NODE = "SELECT_NODE";
export const MOVE_NODE = "MOVE_NODE";

export const createNode = nodePt => ({
  type: CREATE_NODE,
  payload: { id: makeId("node"), nodePt }
});

export const deleteNode = id => ({
  type: DELETE_NODE,
  payload: { id }
});

export const selectNode = id => ({
  type: SELECT_NODE,
  payload: { id }
});

export const moveNode = (id, newNodePt) => ({
  type: MOVE_NODE,
  payload: { id, newNodePt }
});
