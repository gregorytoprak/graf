import { connect } from 'react-redux'
import Node from '../components/Node'
import { deleteNode, selectNode, moveNode } from '../actions/node'

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
  move: (cx, cy) => { dispatch(moveNode(id, cx, cy)) }
})

const NodeContainer = connect(mapStateToProps, mapDispatchToProps)(Node)

export default NodeContainer
