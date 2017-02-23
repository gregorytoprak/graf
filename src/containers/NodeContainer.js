import { connect } from 'react-redux'
import Node from '../components/Node'
import { deleteNode, selectNode } from '../actions/node'
import { emptyHand, moveNodeHand } from '../actions/hand'

const mapStateToProps = (state, { id }) =>
  state.nodes.find(nd => nd.id === id)

const mapDispatchToProps = (dispatch, { id }) => ({
  deleteNode: () => { dispatch(deleteNode(id)) },
  selectNode: () => { dispatch(selectNode(id)) },
  emptyHand: () => { dispatch(emptyHand()) },
  moveNodeHand: (x, y) => { dispatch(moveNodeHand(id, x, y)) }
})

const NodeContainer = connect(mapStateToProps, mapDispatchToProps)(Node)

export default NodeContainer
