import Immutable from 'immutable'
import { RESIZE_VIEWPORT } from '../actions/viewport'

const initialState = Immutable.fromJS({
  width: undefined,
  height: undefined
})

const viewport = (state = initialState, action) => {
  switch (action.type) {
    case RESIZE_VIEWPORT:
      return state.set('width', action.payload.viewport.width).set('height', action.payload.viewport.height)
    default:
      return state
  }
}

export default viewport
