import { connect } from "react-redux";
import Sidebar from "../components/Sidebar";
import { toggleWelcome, fullSelect, setColor } from "../actions/other";

const mapDispatchToProps = dispatch => ({
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
