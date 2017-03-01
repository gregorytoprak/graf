import { connect } from 'react-redux'
import Edge from '../components/Edge'

const mapStateToProps = (state, { id }) => {
  const edge = state.edges.find(ed => ed.id === id)
  const startNode = state.nodes.find(nd => nd.id === edge.startNodeId)
  const endNode = state.nodes.find(nd => nd.id === edge.endNodeId)
  return {
    ...edge,
    startLoc: { x: startNode.cx, y: startNode.cy },
    endLoc: edge.complete ? { x: endNode.cx, y: endNode.cy } : null
  }
}

const mapDispatchToProps = (dispatch, { id }) => ({
})

const EdgeContainer = connect(mapStateToProps, mapDispatchToProps)(Edge)

export default EdgeContainer
