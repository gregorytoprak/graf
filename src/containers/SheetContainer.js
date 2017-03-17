import { connect } from "react-redux";
import Sheet from "../components/Sheet";
import { panSheet, zoomSheet } from "../actions/sheet";
import { createNode, moveNode } from "../actions/node";
import { deleteEdge, moveControl } from "../actions/edge";
import { emptyHand, panHand, startEdgeHand } from "../actions/hand";
import { noSelect } from "../actions/meta";
import { makeId } from "../utils";

const mapStateToProps = state => ({
  ...state.sheet,
  nodeIds: state.nodes.map(nd => nd.id),
  edgeIds: state.edges.map(ed => ed.id),
  nodes: state.nodes,
  edges: state.edges,
  hand: state.hand
});

const mapDispatchToProps = dispatch => ({
  panSheet: shift => {
    dispatch(panSheet(shift));
  },
  zoomSheet: (zoomLoc, zoomFactor) => {
    dispatch(zoomSheet(zoomLoc, zoomFactor));
  },
  createNode: (cx, cy) => {
    dispatch(createNode(makeId("node"), cx, cy));
  },
  moveNode: (id, cx, cy) => {
    dispatch(moveNode(id, cx, cy));
  },
  deleteEdge: id => {
    dispatch(deleteEdge(id));
  },
  moveControl: (id, controlx, controly) => {
    dispatch(moveControl(id, controlx, controly));
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
