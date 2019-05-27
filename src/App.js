import React, { Component } from 'react';
import Search from './Search.js';
import Table from './Table.js';
import Pagination from './Pagination.js';
import axios from 'axios';

export default class App extends Component {
  state = {
    data: [], //stores whole data
    page: 1, //tells currentPage
    maxPage: 67, //tells maxPages
    filtered: [], //save filtered data on basis of search query
    query: '', //saves search query
    currentPage: [] //data to be shown on current page
  };

  handleQuery = event => {
    //update search query in search bar
    this.setState({ query: event.target.value });
  };

  searchData = () => {
    //to search data from data
    let query = this.state.query;
    let filtered = [];
    if (!query) {
      this.setState({ filtered: [] });
    } else {
      query = query[0].toUpperCase() + query.substring(1).toLowerCase();
      filtered = this.state.data.filter(e => e.name.includes(query));
      this.setState({ filtered });
    }
    if (filtered.length !== 0) {
      this.setState({
        currentPage: filtered.slice(0, 20),
        maxPage: Math.ceil(filtered.length / 20)
      });
    } else {
      alert('No such Value');
      this.setState(state => ({
        currentPage: state.data.slice(0, 20),
        maxPage: Math.ceil(state.data.length / 20)
      }));
    }
  };

  changePage = changeNext => {
    let next = this.state.page + changeNext;
    this.setState({ page: next });
    if (this.state.filtered.length === 0) {
      this.setState(state => ({
        currentPage: state.data.slice((next - 1) * 20, next * 20)
      }));
    } else {
      this.setState(state => ({
        currentPage: state.filtered.slice((next - 1) * 20, next * 20)
      }));
    }
  };

  componentDidMount() {
    axios.get(`https://data.nasa.gov/resource/gh4g-9sfh.json`).then(res => {
      this.setState({
        data: res.data,
        currentPage: res.data.slice(0, 20),
        maxPage: Math.ceil(res.data.length / 20)
      });
    });
  }

  render() {
    // console.log("render");
    // this.createTable()
    return (
      <div className="App ui container center aligned ">
        <Search
          query={this.state.query}
          handleQuery={this.handleQuery}
          searchData={this.searchData}
        />
        <Table currentPage={this.state.currentPage} />
        <Pagination
          page={this.state.page}
          maxPage={this.state.maxPage}
          changePage={this.changePage}
        />
      </div>
    );
  }
}

// export default App;
