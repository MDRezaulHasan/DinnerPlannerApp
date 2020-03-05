import React, { Component } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    let tableBody;

    if (Object.keys(this.props.menu).length > 0) {
      tableBody = (
        <tbody>
          {Object.values(this.props.menu).map(dsh => (
            <tr className="flasher">
              <td>
                {dsh.title.length < 20
                  ? dsh.title
                  : dsh.title.substring(0, 17) + "..."}
              </td>
              <td>{dsh.extendedIngredients.length * this.props.nGuests}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    this.props.removeFromMenu(dsh.id);
                  }}
                  key={dsh.id}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      );
    }
    return (
      <div>
        <h3>My dinner</h3>
        <h6 className="btn">People: {this.props.nGuests}</h6>
        <div className="btn-group">
          <button
            onClick={() => this.props.changeNGuests(-1)}
            className="btn btn-outline-dark btn-sm"
          >
            -
          </button>
          <button
            onClick={() => this.props.changeNGuests(1)}
            className="btn btn-outline-dark btn-sm"
          >
            +
          </button>
        </div>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>dish name</th>
              <th>cost</th>
            </tr>
          </thead>
          {tableBody}
          <tfoot>
            <tr>
              <td></td>
              <td>
                {Object.keys(this.props.menu).length > 0
                  ? Object.values(this.props.menu)
                      .map(dsh => dsh.extendedIngredients.length)
                      .reduce((tot, ds) => tot + ds) * this.props.nGuests
                  : 0}
              </td>
            </tr>
          </tfoot>
        </table>
        <Link to="/overview">
          <button className="btn btn-success">Confirm Dinner</button>
        </Link>
      </div>
    );
  }
}

export default Sidebar;
