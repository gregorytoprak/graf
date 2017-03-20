import { connect } from "react-redux";
import Sidebar from "../components/Sidebar";
import { toggleArrow } from "../actions/edge";
import { toggleWelcome, fullSelect, setColor } from "../actions/other";

const mapDispatchToProps = dispatch => ({
  toggleArrow: index => {
    dispatch(toggleArrow(index));
  },
  toggleWelcome: () => {
    dispatch(toggleWelcome());
  },
  fullSelect: selectStatus => {
    dispatch(fullSelect(selectStatus));
  },
  setColor: rawColor => {
    const newColor = rawColor.hex;
    dispatch(setColor(newColor));
  },
  resetColor: () => {
    dispatch(setColor(null));
  }
});

const SidebarContainer = connect(null, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
