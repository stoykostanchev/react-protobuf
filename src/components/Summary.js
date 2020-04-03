import React from "react";

const Summary = () => {
  return (
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
};

export default Summary;
