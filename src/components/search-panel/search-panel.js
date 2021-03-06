import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    term: ""
  }

  onUpdateSearch = (event) => {
    const term = event.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Поиск по записям"
        onChange={this.onUpdateSearch}
         />
    );
  }
}