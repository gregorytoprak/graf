export const EMPTY_HAND = 'EMPTY_HAND'
export const PAN_HAND = 'PAN_HAND'
export const MOVE_NODE_HAND = 'MOVE_NODE_HAND'

export const emptyHand = () => ({
  type: EMPTY_HAND, payload: {}
})

export const panHand = (loc) => ({
  type: PAN_HAND, payload: { loc }
})

export const moveNodeHand = (id, loc) => ({
  type: MOVE_NODE_HAND, payload: { id, loc }
})
