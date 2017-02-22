import Immutable from 'immutable'
import { PAN_SHEET, ZOOM_SHEET } from '../actions/sheet'

const initialState = Immutable.fromJS({
  loc: { cx: 0, cy: 0 },
  dims: { w: 10, h: 10 }
})

const sheet = (state = initialState, action) => {
  switch (action.type) {
    case PAN_SHEET:
      return state.set('loc', Immutable.Map(action.payload.loc))
    case ZOOM_SHEET:
      return state.set('loc', Immutable.Map(action.payload.loc)).set('dims', Immutable.Map(action.payload.dims))
    default:
      return state
  }
}

export default sheet
