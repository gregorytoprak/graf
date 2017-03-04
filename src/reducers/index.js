import sheet from './sheet'
import hand from './hand'
import nodes from './nodes'
import edges from './edges'
import { CLEAR } from '../actions/meta'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR:
      return {}
    default:
      return {
        sheet: sheet(state.sheet, action),
        hand: hand(state.hand, action),
        nodes: nodes(state.nodes, action),
        edges: edges(state.edges, action)
      }
  }
}

export default reducer
