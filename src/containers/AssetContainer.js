import { connect } from "react-redux";

const mapStateToProps = state => state;

const AssetContainer = component => {
  return connect(mapStateToProps)(component);
};

export default AssetContainer;
