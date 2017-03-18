import { connect } from "react-redux";
import Sidebar from "../components/Sidebar";
import { fullSelect, resetColors, setColor } from "../actions/meta";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  fullSelect: selected => {
    dispatch(fullSelect(selected));
  },
  resetColors: () => {
    dispatch(resetColors());
  },
  setColor: rawColor => {
    const newColor = rawColor.hex;
    dispatch(setColor(newColor));
  }
});

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
