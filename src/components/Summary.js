import React from "react";

const SummaryCategory = (catsMap) => (cat) => [
  catsMap[cat] + "x",
  <span className="info" key={cat}>
    {cat}
  </span>,
];

const Summary = ({ totalCount, categoriesMap }) => {
  return (
    <div className="asset-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 asset-summary-left">
            <span>{totalCount} assets</span>
          </div>
          <div className="col-6 asset-summary-right">
            {Object.keys(categoriesMap).map(SummaryCategory(categoriesMap))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
