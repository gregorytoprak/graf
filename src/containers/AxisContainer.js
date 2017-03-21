import { connect } from "react-redux";
import Axis from "../components/Axis";
import { deleteAxis, selectAxis } from "../actions/axis";
import {
  emptyHand,
  moveAxisOriginHand,
  moveAxisUnitHand
} from "../actions/hand";

const mapStateToProps = (state, { id }) => {
  const axis = state.axes.find(ax => ax.id === id);
  return {
    ...axis
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
  }
});

const AxisContainer = connect(mapStateToProps, mapDispatchToProps)(Axis);

export default AxisContainer;
