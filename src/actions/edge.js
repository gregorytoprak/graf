export const START_EDGE = 'START_EDGE'
export const COMPLETE_EDGE = 'COMPLETE_EDGE'
export const DELETE_EDGE = 'DELETE_EDGE'
export const SELECT_EDGE = 'SELECT_EDGE'
export const MOVE_CONTROL = 'MOVE_CONTROL'
export const RESET_CONTROL = 'RESET_CONTROL'

export const startEdge = (id, startNodeId) => ({
  type: START_EDGE, payload: { id, startNodeId }
})

export const completeEdge = (id, endNodeId) => ({
  type: COMPLETE_EDGE, payload: { id, endNodeId, complete: true }
})

export const deleteEdge = (id) => ({
  type: DELETE_EDGE, payload: { id }
})

export const selectEdge = (id) => ({
  type: SELECT_EDGE, payload: { id }
})

export const moveControl = (id, controlx, controly) => ({
  type: MOVE_CONTROL, payload: { id, controlx, controly, curved: true, moving: true }
})

export const resetControl = (id) => ({
  type: RESET_CONTROL, payload: { id, controlx: undefined, controly: undefined, curved: false, selected: false }
})
