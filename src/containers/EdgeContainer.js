import { connect } from 'react-redux'
import Edge from '../components/Edge'

const mapStateToProps = (state, { id }) => {
  const edge = state.edges.find(ed => ed.id === id)
  const control = state.controls.find(ct => ct.id === id)
  const startNode = state.nodes.find(nd => nd.id === edge.startNodeId)
  const endNode = state.nodes.find(nd => nd.id === edge.endNodeId)
  return {
    ...edge,
    startLoc: { cx: startNode.cx, cy: startNode.cy },
    endLoc: { cx: endNode.cx, cy: endNode.cy },
    controlLoc: { cx: control.cx, cy: control.cy }
  }
}

const mapDispatchToProps = (dispatch, { id }) => ({
})

const EdgeContainer = connect(mapStateToProps, mapDispatchToProps)(Edge)

export default EdgeContainer
