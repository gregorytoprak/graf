import { connect } from 'react-redux'
import Node from '../components/Node'
import { deleteNode, selectNode } from '../actions/node'
import { emptyHand, moveNodeHand } from '../actions/hand'

const mapStateToProps = (state, { id }) => {
  const node = state.get('nodes').find(node => node.get('id') === id)
  return {
    cx: node.get('cx'),
    cy: node.get('cy'),
    selected: node.get('selected')
  }
}

const mapDispatchToProps = (dispatch, { id }) => ({
  delete: () => { dispatch(deleteNode(id)) },
  select: () => { dispatch(selectNode(id)) },
  emptyHand: () => { dispatch(emptyHand()) },
  moveNodeHand: (id, loc) => { dispatch(moveNodeHand(id, loc)) }
})

const NodeContainer = connect(mapStateToProps, mapDispatchToProps)(Node)

export default NodeContainer
