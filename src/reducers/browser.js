import Immutable from 'immutable'
import { RESIZE_BROWSER } from '../actions/browser'

const initialState = Immutable.fromJS({
  width: undefined,
  height: undefined
})

const sheet = (state = initialState, action) => {
  switch (action.type) {
    case RESIZE_BROWSER:
      return state.set('width', action.payload.dims.width).set('height', action.payload.dims.height)
    default:
      return state
  }
}

export default sheet
