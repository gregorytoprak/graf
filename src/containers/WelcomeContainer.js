import { connect } from "react-redux";
import Welcome from "../components/Welcome";
import { resizeViewport } from "../actions/sheet";
import { toggleWelcome, clear } from "../actions/other";
import { persistence, download } from "../utils";

const mapStateToProps = state => ({
  welcomeVisible: state.app.welcomeVisible
});

const mapDispatchToProps = dispatch => ({
  toggleWelcome: () => {
    dispatch(toggleWelcome());
  },
  newGraph: () => {
    persistence.clear();
    dispatch(clear());
    dispatch(resizeViewport());
  },
  download: () => {
    download();
  }
});

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome);

export default WelcomeContainer;
