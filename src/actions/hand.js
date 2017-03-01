export const EMPTY_HAND = 'EMPTY_HAND'
export const PAN_HAND = 'PAN_HAND'
export const MOVE_NODE_HAND = 'MOVE_NODE_HAND'
export const START_EDGE_HAND = 'START_EDGE_HAND'
export const MOVE_CONTROL_HAND = 'MOVE_CONTROL_HAND'

export const emptyHand = () => ({
  type: EMPTY_HAND, payload: { palm: 'empty' }
})

export const panHand = (x, y) => ({
  type: PAN_HAND, payload: { palm: 'pan', x, y }
})

export const moveNodeHand = (id, x, y) => ({
  type: MOVE_NODE_HAND, payload: { palm: 'moveNode', id, x, y }
})

export const startEdgeHand = (id, loc) => ({
  type: START_EDGE_HAND, payload: { palm: 'startEdge', id, loc }
})

export const moveControlHand = (id, loc) => ({
  type: MOVE_CONTROL_HAND, payload: { palm: 'moveControl', id, loc }
})
