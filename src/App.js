import React from "react";
import "./App.css";
import SummaryContainer from "./containers/SummaryContainer";
import AssetPreviewContainer from "./containers/AssetPreviewContainer";
import AssetPickerContainer from "./containers/AssetPickerContainer";

const App = () => (
  <div className="wrapper">
    <SummaryContainer></SummaryContainer>
    <div className="container asset-builder">
      <div className="row">
        <div className="col-4">
          <AssetPickerContainer></AssetPickerContainer>
        </div>
        <div className="col-8">
          <h2>Learning Assets Preview</h2>
          <AssetPreviewContainer></AssetPreviewContainer>
        </div>
      </div>
    </div>
  </div>
);

export default App;
