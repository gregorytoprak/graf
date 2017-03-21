import { connect } from "react-redux";
import Sheet from "../components/Sheet";
import { panSheet, zoomSheet } from "../actions/sheet";
import { createNode, moveNode } from "../actions/node";
import { deleteEdge, dropEdge, moveEdgeHandle } from "../actions/edge";
import { createAxis, moveAxisOrigin, moveAxisUnit } from "../actions/axis";
import { emptyHand, panHand, startEdgeHand } from "../actions/hand";
import { noSelect } from "../actions/other";

const mapStateToProps = state => ({
  ...state.sheet,
  nodeIds: state.nodes.map(nd => nd.id),
  edgeIds: state.edges.map(ed => ed.id),
  axisIds: state.axes.map(ax => ax.id),
  hand: state.hand
});

const mapDispatchToProps = dispatch => ({
  panSheet: shift => {
    dispatch(panSheet(shift));
  },
  zoomSheet: (zoomPt, zoomFactor) => {
    dispatch(zoomSheet(zoomPt, zoomFactor));
  },
  createNode: initPt => {
    dispatch(createNode(initPt));
  },
  moveNode: (id, newPt) => {
    dispatch(moveNode(id, newPt));
  },
  deleteEdge: id => {
    dispatch(deleteEdge(id));
  },
  dropEdge: () => {
    dispatch(dropEdge());
  },
  moveEdgeHandle: (id, newHandlePt) => {
    dispatch(moveEdgeHandle(id, newHandlePt));
  },
  createAxis: (num, initOriginPt) => {
    dispatch(createAxis(num, initOriginPt));
  },
  moveAxisOrigin: (id, newOriginPt) => {
    dispatch(moveAxisOrigin(id, newOriginPt));
  },
  moveAxisUnit: (id, newUnitLoc) => {
    dispatch(moveAxisUnit(id, newUnitLoc));
  },
  emptyHand: () => {
    dispatch(emptyHand());
  },
  panHand: grabPt => {
    dispatch(panHand(grabPt));
  },
  startEdgeHand: handPt => {
    dispatch(startEdgeHand(handPt));
  },
  noSelect: () => {
    dispatch(noSelect());
  }
});

const SheetContainer = connect(mapStateToProps, mapDispatchToProps)(Sheet);

export default SheetContainer;
