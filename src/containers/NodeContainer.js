import { connect } from 'react-redux'
import Node from '../components/Node'
import { deleteNode, selectNode } from '../actions/node'
import { startEdge, completeEdge } from '../actions/edge'
import { emptyHand, moveNodeHand, startEdgeHand } from '../actions/hand'
import { makeId } from '../utils'

const mapStateToProps = (state, { id }) => {
  const node = state.nodes.find(nd => nd.id === id)
  return {
    ...node,
    hand: state.hand
  }
}

const mapDispatchToProps = (dispatch, { id }) => ({
  deleteNode: () => { dispatch(deleteNode(id)) },
  selectNode: () => { dispatch(selectNode(id)) },
  emptyHand: () => { dispatch(emptyHand()) },
  startEdge: (loc) => {
    const edgeId = makeId('edge')
    dispatch(startEdge(edgeId, id))
    dispatch(startEdgeHand(edgeId, loc))
  },
  completeEdge: (edgeId) => { dispatch(completeEdge(edgeId, id)) },
  moveNodeHand: (x, y) => { dispatch(moveNodeHand(id, x, y)) }
})

const NodeContainer = connect(mapStateToProps, mapDispatchToProps)(Node)

export default NodeContainer
