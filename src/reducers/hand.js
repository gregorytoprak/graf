import { EMPTY_HAND, PAN_HAND, MOVE_NODE_HAND } from '../actions/hand'

const initialState = {
  palm: 'empty'
}

const sheet = (state = initialState, action) => {
  switch (action.type) {
    case EMPTY_HAND:
    case PAN_HAND:
    case MOVE_NODE_HAND:
      return action.payload
    default:
      return state
  }
}

export default sheet
