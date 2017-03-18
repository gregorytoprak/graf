import { connect } from "react-redux";
import Sheet from "../components/Sheet";
import { panSheet, zoomSheet } from "../actions/sheet";
import { createNode, moveNode } from "../actions/node";
import { deleteEdge, dropEdge, moveEdgeHandle } from "../actions/edge";
import { emptyHand, panHand, startEdgeHand } from "../actions/hand";
import { noSelect } from "../actions/meta";

const mapStateToProps = state => ({
  ...state.sheet,
  nodeIds: state.nodes.map(nd => nd.id),
  edgeIds: state.edges.map(ed => ed.id),
  hand: state.hand
});

const mapDispatchToProps = dispatch => ({
  panSheet: shift => {
    dispatch(panSheet(shift));
  },
  zoomSheet: (zoomLoc, zoomFactor) => {
    dispatch(zoomSheet(zoomLoc, zoomFactor));
  },
  createNode: initNodePt => {
    dispatch(createNode(initNodePt));
  },
  moveNode: (id, newNodePt) => {
    dispatch(moveNode(id, newNodePt));
  },
  deleteEdge: id => {
    dispatch(deleteEdge(id));
  },
  dropEdge: () => {
    dispatch(dropEdge());
  },
  moveEdgeHandle: (id, newHandleLoc) => {
    dispatch(moveEdgeHandle(id, newHandleLoc));
  },
  emptyHand: () => {
    dispatch(emptyHand());
  },
  panHand: grabLoc => {
    dispatch(panHand(grabLoc));
  },
  startEdgeHand: moveLoc => {
    dispatch(startEdgeHand(moveLoc));
  },
  noSelect: () => {
    dispatch(noSelect());
  }
});

const SheetContainer = connect(mapStateToProps, mapDispatchToProps)(Sheet);

export default SheetContainer;
