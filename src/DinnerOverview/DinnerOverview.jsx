import React, { Component } from "react";
import { Link } from "react-router-dom";

class DinnerOverview extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/selectDish/search?">
          <button className="btn btn-outline-dark">
            Go back and edit dinner
          </button>
        </Link>
        <Link to="/printout">
          <button className="btn btn-outline-dark">
            Print full ingredients list
          </button>
        </Link>
        <h3>{"Dinner for " + this.props.nGuests}</h3>
        <div>
          {Object.values(this.props.menu).map(dish => (
            <div className="card faded" key={dish.id}>
              <img className="card-img-top forceRatio" src={dish.image}></img>
              <div className="card-body">
                <span className="card-text">
                  {dish.title.length < 14
                    ? dish.title
                    : dish.title.substring(0, 11) + "..."}
                </span>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

/*
function DinnerOverview({
    ingredients,
    guests,
    Totalprice,
    whenDone: [doneCallback, doneMessage]
}) {
    return h(
        "div",
        h("div", "Dinner for ", guests, " people"),
        h(
            "div",
            "Total price: " + Totalprice,
            h(
                "div",
                { className: "Nav" },
                h("button", { onClick: e => doneCallback() }, doneMessage)
            ),
            h(
                "div",
                h(
                    "table",
                    { border: "1" },
                    h(
                        "tr",
                        h("th", { className: "texthead" }, "Ingredients"),
                        h("th", { className: "texthead" }, "Supermarket Aisle"),
                        h("th", { className: "texthead" }, "Amount")
                    ),
                    ingredients
                        .sort(
                            function (a, b) {
                                return (
                                    a.aisle.localeCompare(b.aisle) || a.name.localeCompare(b.name)
                                ); // returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
                            }.bind(this)
                        )
                        .map(ingrdient =>
                            h(
                                "tr",
                                { border: "1" },
                                h("td", { className: "td" }, ingrdient.name),
                                h("td", { className: "td" }, ingrdient.aisle),
                                h(
                                    "td",
                                    { className: "td" },
                                    ingrdient.amount * guests.toFixed(2)
                                )
                            )
                        )
                )
            )
        )
    ); //.render(this.root);
}

*/

export default DinnerOverview;
