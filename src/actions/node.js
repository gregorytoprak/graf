export const CREATE_NODE = 'CREATE_NODE'
export const DELETE_NODE = 'DELETE_NODE'
export const SELECT_NODE = 'SELECT_NODE'
export const MOVE_NODE = 'MOVE_NODE'

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
