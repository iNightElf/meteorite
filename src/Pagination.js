import React from 'react';
function Pagination(props) {
  return (
    <div className="ui pagination" style={{ marginBottom: '2.5rem' }}>
      <button
        className="ui button"
        onClick={() => {
          props.changePage(-1);
        }}
        disabled={props.page === 1}
      >
        Previous
      </button>
      <button
        className="ui button"
        onClick={() => {
          props.changePage(1);
        }}
        disabled={props.page === props.maxPage}
      >
        Next
      </button>
    </div>
  );
}
export default Pagination;
