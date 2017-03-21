import { connect } from "react-redux";
import Axis from "../components/Axis";
import {
  deleteAxis,
  alignAxis,
  selectAxis,
  moveAxisOrigin,
  moveAxisUnit
} from "../actions/axis";
import { moveNode } from "../actions/node";
import { moveEdgeHandle } from "../actions/edge";
import {
  emptyHand,
  moveAxisOriginHand,
  moveAxisUnitHand
} from "../actions/hand";

const mapStateToProps = (state, { id }) => {
  const axis = state.axes.find(ax => ax.id === id);
  return {
    ...axis,
    hand: state.hand
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  deleteAxis: () => {
    dispatch(deleteAxis(id));
  },
  alignAxis: () => {
    dispatch(alignAxis(id));
  },
  selectAxis: () => {
    dispatch(selectAxis(id));
  },
  emptyHand: () => {
    dispatch(emptyHand());
  },
  moveAxisOriginHand: relGrabPt => {
    dispatch(moveAxisOriginHand(id, relGrabPt));
  },
  moveAxisUnitHand: (relGrabPt, originPt) => {
    dispatch(moveAxisUnitHand(id, relGrabPt, originPt));
  },
  magnetNode: (nodeId, newPt) => {
    dispatch(moveNode(nodeId, newPt));
  },
  magnetEdgeHandle: (edgeId, newHandleLoc) => {
    dispatch(moveEdgeHandle(edgeId, newHandleLoc));
  },
  magnetAxisOrigin: (axisId, newOriginPt) => {
    dispatch(moveAxisOrigin(axisId, newOriginPt));
  },
  magnetAxisUnit: (axisId, newUnitLoc) => {
    dispatch(moveAxisUnit(axisId, newUnitLoc));
  }
});

const AxisContainer = connect(mapStateToProps, mapDispatchToProps)(Axis);

export default AxisContainer;
