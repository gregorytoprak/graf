export const MOVE_CONTROL = 'MOVE_CONTROL'
export const RESET_CONTROL = 'RESET_CONTROL'

export const moveControl = (id, loc) => ({
  type: MOVE_CONTROL, payload: { id, loc }
})

export const resetControl = (id) => ({
  type: RESET_CONTROL, payload: { id }
})
