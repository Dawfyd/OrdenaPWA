import React, { Component } from "react";

export class Search extends Component {
  State = {
    inputItem: "",
  };

  _handleChange = (e) => {
    this.setState({ inputItem: e.target.value });
  };

  _handleSubmit = (e) => {
    e.preventDefault();
    alert(this.state.inputItem);
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="browser">
          <input
            id="search_input"
            onChange={this._handleChange}
            type="search"
            className="search"
            placeholder="  Ej: Hamburguesa..."
          />
          <input id="search_button" type="submit" value=" " />
        </div>
      </form>
    );
  }
}

export default Search;
