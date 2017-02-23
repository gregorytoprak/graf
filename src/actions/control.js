export const MOVE_CONTROL = 'MOVE_CONTROL'
export const RESET_CONTROL = 'RESET_CONTROL'

export const moveControl = (id, cx, cy) => ({
  type: MOVE_CONTROL, payload: { id, cx, cy }
})

export const resetControl = (id) => ({
  type: RESET_CONTROL, payload: { id, cx: undefined, cy: undefined }
})
