import React from "react";
import AssetPicker from "./components/AssetPicker";
import Summary from "./components/Summary";
import AssetPreview from "./components/AssetPreview";

import "./App.css";

const AssetContainer = component => component;
const SummaryContainer = AssetContainer(Summary);

const AssetPickerContainer = AssetContainer(AssetPicker);

const AssetPreviewContainer = AssetContainer(AssetPreview);

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
