import Immutable from 'immutable'
import { EMPTY_HAND, PAN_HAND } from '../actions/hand'

const initialState = Immutable.fromJS({
  type: 'empty',
  loc: {
    x: undefined,
    y: undefined
  }
})

const sheet = (state = initialState, action) => {
  switch (action.type) {
    case EMPTY_HAND:
      return initialState
    case PAN_HAND:
      return state
        .set('type', 'pan')
        .setIn(['loc', 'x'], action.payload.loc.x)
        .setIn(['loc', 'y'], action.payload.loc.y)
    default:
      return state
  }
}

export default sheet
