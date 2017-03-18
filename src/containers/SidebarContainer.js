import { connect } from "react-redux";
import Sidebar from "../components/Sidebar";
import { fullSelect, setColor } from "../actions/meta";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  fullSelect: selectStatus => {
    dispatch(fullSelect(selectStatus));
  },
  resetColor: () => {
    dispatch(setColor(null));
  },
  setColor: rawColor => {
    const newColor = rawColor.hex;
    dispatch(setColor(newColor));
  }
});

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
