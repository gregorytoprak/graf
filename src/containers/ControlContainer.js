import { connect } from 'react-redux'
import Control from '../components/Control'

const mapStateToProps = (state, { id }) => {
  const control = state.controls.find(ct => ct.id === id)
  const edge = state.edges.find(ed => ed.id === id)
  const startNode = state.nodes.find(nd => nd.id === edge.startNodeId)
  const endNode = state.nodes.find(nd => nd.id === edge.endNodeId)
  return {
    ...control,
    startLoc: { cx: startNode.cx, cy: startNode.cy },
    endLoc: { cx: endNode.cx, cy: endNode.cy }
  }
}

const mapDispatchToProps = (dispatch, { id }) => ({
})

const ControlContainer = connect(mapStateToProps, mapDispatchToProps)(Control)

export default ControlContainer
