import React, {Component} from 'react';
import TableRows from './TableRows.js';

export default class Table extends Component {
  render() {
    return (
      <div className="">
        <table className="ui celled padded table">
          <thead className="">
            <tr>
              <th>Name</th>
              <th>Id</th>
              <th>nametype</th>
              <th>recclass</th>
              <th>mass(g)</th>
              <th>fall</th>
              <th>year</th>
              <th>reclat</th>
              <th>reclong</th>
            </tr>
          </thead>
          <tbody>
            {this.props.currentPage.map((e, i) => {
              return <TableRows key={i} data={e} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
//
