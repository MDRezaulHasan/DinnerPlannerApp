import React, { Component } from "react";
import "./SearchBar.css";
import { Router, Link } from "react-router-dom";

const types = [
  "starter",
  "main course",
  "dessert",
  "salad",
  "bread",
  "breakfast",
  "soup",
  "beverage",
  "sauce",
  "drink"
];

class SearchBar extends Component {
  render() {
    return (
      <div className="border-bottom">
        <Link to={"/"} className="col-sp">
          <button className="btn btn-dark">Home</button>
        </Link>
        <input
          defaultValue={this.props.query}
          onChange={e => this.props.setQuery(e.target.value)}
        />
        <button onClick={this.props.search} className="btn btn-dark">
          Search
        </button>
        <select
          value={this.props.type}
          onChange={event => {
            console.log(event.target);
            this.props.setType(event.target.value, this.props.search);
          }}
          id="dropdown"
          className="btn btn-dark"
        >
          <option value="">--select--</option>
          {types.map(t => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default SearchBar;
