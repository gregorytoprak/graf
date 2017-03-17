export const EMPTY_HAND = "EMPTY_HAND";
export const PAN_HAND = "PAN_HAND";
export const MOVE_NODE_HAND = "MOVE_NODE_HAND";
export const START_EDGE_HAND = "START_EDGE_HAND";
export const MOVE_CONTROL_HAND = "MOVE_CONTROL_HAND";

export const emptyHand = () => ({
  type: EMPTY_HAND,
  payload: { palm: EMPTY_HAND }
});

export const panHand = grabLoc => ({
  type: PAN_HAND,
  payload: { palm: PAN_HAND, grabLoc }
});

export const moveNodeHand = (id, relGrabLoc) => ({
  type: MOVE_NODE_HAND,
  payload: { palm: MOVE_NODE_HAND, id, relGrabLoc }
});

export const startEdgeHand = (id, loc) => ({
  type: START_EDGE_HAND,
  payload: { palm: START_EDGE_HAND, id, loc }
});

export const moveControlHand = (id, relGrabLoc) => ({
  type: MOVE_CONTROL_HAND,
  payload: { palm: MOVE_CONTROL_HAND, id, relGrabLoc }
});
