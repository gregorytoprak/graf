export const CREATE_NODE = 'CREATE_NODE'
export const DELETE_NODE = 'DELETE_NODE'
export const SELECT_NODE = 'SELECT_NODE'
export const MOVE_NODE = 'MOVE_NODE'

export const START_EDGE = 'START_EDGE'
export const COMPLETE_EDGE = 'COMPLETE_EDGE'
export const DELETE_EDGE = 'DELETE_EDGE'
export const SELECT_EDGE = 'SELECT_EDGE'

export const createNode = (id, loc) => ({
  type: CREATE_NODE, payload: { id, loc }
})

export const deleteNode = (id) => ({
  type: DELETE_NODE, payload: { id }
})

export const selectNode = (id) => ({
  type: SELECT_NODE, payload: { id }
})

export const moveNode = (id, loc) => ({
  type: MOVE_NODE, payload: { id, loc }
})

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
