export const EMPTY_HAND = "EMPTY_HAND";
export const PAN_HAND = "PAN_HAND";
export const MOVE_NODE_HAND = "MOVE_NODE_HAND";
export const START_EDGE_HAND = "START_EDGE_HAND";
export const MOVE_EDGE_HANDLE_HAND = "MOVE_EDGE_HANDLE_HAND";
export const MOVE_AXIS_ORIGIN_HAND = "MOVE_AXIS_ORIGIN_HAND";
export const MOVE_AXIS_UNIT_HAND = "MOVE_AXIS_UNIT_HAND";

export const emptyHand = () => ({
  type: EMPTY_HAND,
  payload: { palm: EMPTY_HAND }
});

export const panHand = grabPt => ({
  type: PAN_HAND,
  payload: { palm: PAN_HAND, grabPt }
});

export const moveNodeHand = (id, relGrabPt) => ({
  type: MOVE_NODE_HAND,
  payload: { palm: MOVE_NODE_HAND, id, relGrabPt }
});

export const startEdgeHand = handPt => ({
  type: START_EDGE_HAND,
  payload: { palm: START_EDGE_HAND, handPt }
});

export const moveEdgeHandleHand = (id, relGrabPt, midPt) => ({
  type: MOVE_EDGE_HANDLE_HAND,
  payload: { palm: MOVE_EDGE_HANDLE_HAND, id, relGrabPt, midPt }
});

export const moveAxisOriginHand = (id, relGrabPt) => ({
  type: MOVE_AXIS_ORIGIN_HAND,
  payload: { palm: MOVE_AXIS_ORIGIN_HAND, id, relGrabPt }
});

export const moveAxisUnitHand = (id, relGrabPt, originPt) => ({
  type: MOVE_AXIS_UNIT_HAND,
  payload: { palm: MOVE_AXIS_UNIT_HAND, id, relGrabPt, originPt }
});
