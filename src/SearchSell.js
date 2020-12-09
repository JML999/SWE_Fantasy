import React, { Component } from "react";
import "./Search.css";

class SearchSell extends Component {
  state = {
    searchValue: "",
    numValue: "",
    meals: []
  };

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleOnNumChange = event2 => {
    this.setState({ numValue: event2.target.value });
  };

  handleSearch = () => {
    console.log("SELLING:");
    console.log(this.state.searchValue);
    console.log(this.state.numValue);
  };

  makeApiCall = searchInput => {
  };

  render() {
    return (
      <div id="main">
        <input
          name="text"
          type="text"
          placeholder="Ticker"
          onChange={event => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
        <input
          name="num"
          type="num"
          placeholder="# of Shares"
          onChange={event2 => this.handleOnNumChange(event2)}
          value={this.state.numValue}
        />
        <button onClick={this.handleSearch}>Submit</button>
      </div>
    );
  }
}

export default SearchSell;
