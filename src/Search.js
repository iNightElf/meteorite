import React from 'react';

function Search(props) {
  return (
    <div className="ui center aligned header">
      <div
        className="ui header"
        style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}
      >
        Meteorite Explorer
      </div>
      <div className="ui action input">
        <input
          type="text"
          name="search-bar"
          value={props.query}
          onChange={props.handleQuery}
          className="form-control"
          placeholder="Enter Meteorite"
        />
        <button onClick={props.searchData} className="ui button">
          Search
        </button>
      </div>
    </div>
  );
}
export default Search;
