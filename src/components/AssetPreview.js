import React from "react";

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

export default AssetPreview;
