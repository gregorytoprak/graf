import Immutable from 'immutable'
import { RESIZE_BROWSER } from '../actions/sheet'

const initialState = Immutable.fromJS({
  x: undefined,
  y: undefined,
  w: undefined,
  h: undefined
})

const sheet = (state = initialState, action) => {
  switch (action.type) {
    case RESIZE_BROWSER:
      return Immutable.fromJS(action.payload.dims)
    default:
      return state
  }
}

export default sheet
