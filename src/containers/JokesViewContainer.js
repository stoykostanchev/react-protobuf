import JokesView from "../components/JokesView";
import { connect } from "react-redux";
import { getJokes, changeActiveJoke } from "./../actions";

const mapDispatchToProperties = () => {
  return {
    loadJokes: getJokes,
    changeActiveJoke,
  };
};

const mapStateToProps = (state) => {
  return {
    activeJoke: state.jokes[state.activeJoke],
    timeMS: 8000,
  };
};

export default connect(mapStateToProps, mapDispatchToProperties)(JokesView);
