

import React from "react";
import "../App.css";

function Filter({ titleFilter, ratingFilter, setTitleFilter, setRatingFilter }) {
  return (
    <div className="filter-section">
      <input
        type="text"
        placeholder="Search by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
        min="0"
        max="5"
        step="0.1"
      />
    </div>
  );
}

export default Filter;
