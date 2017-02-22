import { connect } from 'react-redux'
import Node from '../components/Node'
import { deleteNode, selectNode, moveNode } from '../actions/node'

const mapStateToProps = (state, { id }) => {
  const node = state.get('nodes').find(node => node.get('id') === id)
  return {
    loc: {
      x: node.getIn(['loc', 'x']),
      y: node.getIn(['loc', 'y'])
    },
    selected: node.get('selected')
  }
}

const mapDispatchToProps = (dispatch, { id }) => ({
  delete: () => { dispatch(deleteNode(id)) },
  select: () => { dispatch(selectNode(id)) },
  move: (loc) => { dispatch(moveNode(id, loc)) }
})

const NodeContainer = connect(mapStateToProps, mapDispatchToProps)(Node)

export default NodeContainer
