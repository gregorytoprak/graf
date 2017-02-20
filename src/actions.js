export const CREATE_NODE = 'CREATE_NODE'

export const createNode = (id, loc) => ({
  type: CREATE_NODE,
  data: {
    id,
    loc
  }
})
