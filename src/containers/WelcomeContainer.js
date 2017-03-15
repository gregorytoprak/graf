import { connect } from "react-redux";
import Welcome from "../components/Welcome";
import { clear } from "../actions/meta";
import { resizeViewport } from "../actions/sheet";
import { persistence } from "../utils";

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, { hide }) => ({
  newGraph: () => {
    persistence.clear();
    dispatch(clear());
    dispatch(resizeViewport());
    hide();
  }
});

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome);

export default WelcomeContainer;
