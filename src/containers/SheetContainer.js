import { connect } from 'react-redux'
import Sheet from '../components/Sheet'
import { panSheet, zoomSheet } from '../actions/sheet'
import { createNode, moveNode } from '../actions/node'
import { deleteEdge } from '../actions/edge'
import { emptyHand, panHand, startEdgeHand } from '../actions/hand'
import { makeId } from '../utils'

const mapStateToProps = (state) => ({
  ...state.sheet,
  nodeIds: state.nodes.map(nd => nd.id),
  edgeIds: state.edges.map(ed => ed.id),
  hand: state.hand
})

const mapDispatchToProps = (dispatch) => ({
  panSheet: (dx, dy) => { dispatch(panSheet(dx, dy)) },
  zoomSheet: (zoomLoc, zoomFactor) => { dispatch(zoomSheet(zoomLoc, zoomFactor)) },
  createNode: (cx, cy) => { dispatch(createNode(makeId('node'), cx, cy)) },
  moveNode: (id, cx, cy) => { dispatch(moveNode(id, cx, cy)) },
  deleteEdge: (id) => { dispatch(deleteEdge(id)) },
  emptyHand: () => { dispatch(emptyHand()) },
  panHand: (x, y) => { dispatch(panHand(x, y)) },
  startEdgeHand: (id, loc) => { dispatch(startEdgeHand(id, loc)) }
})

const SheetContainer = connect(mapStateToProps, mapDispatchToProps)(Sheet)

export default SheetContainer
