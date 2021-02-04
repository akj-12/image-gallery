import React from "react";

function Search({ term, onTermChange }) {
  return (
    <div className="ui segment">
      <div className="ui fluid icon input ">
        <input
          type="text"
          placeholder="Search a term..."
          onChange={(e) => {
            onTermChange(e.target.value);
          }}
          value={term}
        />
        <i className="search icon"></i>
      </div>
    </div>
  );
}

export default Search;
