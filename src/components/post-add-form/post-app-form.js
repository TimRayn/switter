import React, { Component } from "react";

import "./post-add-form.css";

export default class PostAppForm extends Component {
  state = {
    text: ""
  };

  onValueChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <form
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit} >
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="О чем вы думаете сейчас?"
          onChange={this.onValueChange}
          value={this.state.text} />
        <button
          type="submit"
          className="btn btn-outline-secondary">
          Добавить</button>
      </form>
    );
  };
}