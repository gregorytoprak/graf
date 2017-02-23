export const EMPTY_HAND = 'EMPTY_HAND'
export const PAN_HAND = 'PAN_HAND'

export const emptyHand = () => ({
  type: EMPTY_HAND, payload: {}
})

export const panHand = (loc) => ({
  type: PAN_HAND, payload: { loc }
})
