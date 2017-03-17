import { connect } from "react-redux";
import Sheet from "../components/Sheet";
import { panSheet, zoomSheet } from "../actions/sheet";
import { createNode, moveNode } from "../actions/node";
import { deleteEdge, moveControl } from "../actions/edge";
import { emptyHand, panHand, startEdgeHand } from "../actions/hand";
import { noSelect } from "../actions/meta";

const mapStateToProps = state => ({
  ...state.sheet,
  nodeIds: state.nodes.map(nd => nd.id),
  edgeIds: state.edges.map(ed => ed.id),
  hand: state.hand
});

const mapDispatchToProps = dispatch => ({
  panSheet: newCenter => {
    dispatch(panSheet(newCenter));
  },
  zoomSheet: (zoomLoc, zoomFactor) => {
    dispatch(zoomSheet(zoomLoc, zoomFactor));
  },
  createNode: nodePt => {
    dispatch(createNode(nodePt));
  },
  moveNode: (id, newNodePt) => {
    dispatch(moveNode(id, newNodePt));
  },
  deleteEdge: id => {
    dispatch(deleteEdge(id));
  },
  moveControl: (id, newControlPt) => {
    dispatch(moveControl(id, newControlPt));
  },
  emptyHand: () => {
    dispatch(emptyHand());
  },
  panHand: grabLoc => {
    dispatch(panHand(grabLoc));
  },
  startEdgeHand: (id, loc) => {
    dispatch(startEdgeHand(id, loc));
  },
  noSelect: () => {
    dispatch(noSelect());
  }
});

const SheetContainer = connect(mapStateToProps, mapDispatchToProps)(Sheet);

export default SheetContainer;
