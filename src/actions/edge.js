export const START_EDGE = 'START_EDGE'
export const COMPLETE_EDGE = 'COMPLETE_EDGE'
export const DELETE_EDGE = 'DELETE_EDGE'
export const SELECT_EDGE = 'SELECT_EDGE'

export const startEdge = (id, startNodeId) => ({
  type: START_EDGE, payload: { id, startNodeId }
})

export const completeEdge = (id, endNodeId) => ({
  type: COMPLETE_EDGE, payload: { id, endNodeId }
})

export const deleteEdge = (id) => ({
  type: DELETE_EDGE, payload: { id }
})

export const selectEdge = (id) => ({
  type: SELECT_EDGE, payload: { id }
})
