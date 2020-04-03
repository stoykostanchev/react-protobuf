import React from "react";
import "./App.css";

const AssetContainer = component => component;
const Summary = () => (
  <div className="asset-summary">
    <div className="container">
      <div className="row">
        <div className="col-6 asset-summary-left">
          <span>4 assets</span>
        </div>
        <div className="col-6 asset-summary-right">
          2x<span className="info">Articles</span>
          1x<span className="info">Documents</span>
          1x<span className="info">Video</span>
        </div>
      </div>
    </div>
  </div>
);
const SummaryContainer = AssetContainer(Summary);

const AssetPicker = () => (
  <ul className="asset-picker">
    <li className="asset type-video">
      <h2>Dummy asset name</h2>
      <p>
        <span className="info">4 minutes</span>
        <span className="info">Video</span>
      </p>
    </li>
    <li className="asset type-video">
      <h2>Dummy asset name</h2>
      <p>
        <span className="info">4 minutes</span>
        <span className="info">Video</span>
      </p>
    </li>
    <li className="asset type-video">
      <h2>Dummy asset name</h2>
      <p>
        <span className="info">4 minutes</span>
        <span className="info">Video</span>
      </p>
    </li>
    <li className="asset type-video">
      <h2>Dummy asset name</h2>
      <p>
        <span className="info">4 minutes</span>
        <span className="info">Video</span>
      </p>
    </li>
  </ul>
);
const AssetPickerContainer = AssetContainer(AssetPicker);

const AssetPreview = () => (
  <ul className="asset-preview">
    <li className="asset type-article">
      <h2>Dummy asset name</h2>
      <p>
        <span className="info">4 minutes</span>
        <span className="info">Articles</span>
      </p>
      <button className="remove-asset">x</button>
    </li>
    <li className="asset type-article">
      <h2>Dummy asset name</h2>
      <p>
        <span className="info">4 minutes</span>
        <span className="info">Articles</span>
      </p>
      <button className="remove-asset">x</button>
    </li>
    <li className="asset type-document">
      <h2>Dummy asset name</h2>
      <p>
        <span className="info">4 minutes</span>
        <span className="info ">Document</span>
      </p>
      <button className="remove-asset">x</button>
    </li>
    <li className="asset type-video">
      <h2>Dummy asset name</h2>
      <p>
        <span className="info">4 minutes</span>
        <span className="info">Video</span>
      </p>
      <button className="remove-asset">x</button>
    </li>
  </ul>
);
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
