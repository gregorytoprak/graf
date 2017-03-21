import { connect } from "react-redux";
import Axis from "../components/Axis";
import {
  deleteAxis,
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
  selectAxis: () => {
    dispatch(selectAxis(id));
  },
  emptyHand: () => {
    dispatch(emptyHand());
  },
  moveAxisOriginHand: relGrabPt => {
    dispatch(moveAxisOriginHand(id, relGrabPt));
  },
  moveAxisUnitHand: relGrabPt => {
    dispatch(moveAxisUnitHand(id, relGrabPt));
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
  magnetAxisUnit: (axisId, newUnitPt) => {
    dispatch(moveAxisUnit(axisId, newUnitPt));
  }
});

const AxisContainer = connect(mapStateToProps, mapDispatchToProps)(Axis);

export default AxisContainer;
