import { connect } from 'react-redux'
import Edge from '../components/Edge'
import { deleteEdge, selectEdge } from '../actions/edge'
import { emptyHand } from '../actions/hand'

const mapStateToProps = (state, { id }) => {
  const edge = state.edges.find(ed => ed.id === id)
  const startNode = state.nodes.find(nd => nd.id === edge.startNodeId)
  const endNode = state.nodes.find(nd => nd.id === edge.endNodeId)
  return {
    ...edge,
    startLoc: { x: startNode.cx, y: startNode.cy },
    endLoc: edge.complete ? { x: endNode.cx, y: endNode.cy } : null,
    hand: state.hand
  }
}

const mapDispatchToProps = (dispatch, { id }) => ({
  deleteEdge: () => { dispatch(deleteEdge(id)) },
  selectEdge: () => { dispatch(selectEdge(id)) },
  emptyHand: () => { dispatch(emptyHand()) }
})

const EdgeContainer = connect(mapStateToProps, mapDispatchToProps)(Edge)

export default EdgeContainer
