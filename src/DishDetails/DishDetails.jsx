import React, { Component } from "react";
import "./DishDetails.css";
import IngredientsList from "../IngredientsList/IngredientsList";
import { Link } from "react-router-dom";

class DishDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: null
    };
    // We create the state to store the various statuses
    // e.g. API data loading or error
  }

  componentDidMount() {
    this.props.api
      .getRecipe(this.props.match.params.id)
      .then(res => this.setState({ dish: res }));
  }

  render() {
    let content;
    this.props;
    if (this.state.dish) {
      console.log(this.state.dish);
      content = (
        <div className="row mh-100 no-gutters">
          <div className="col-sp-5">
            <h4>{this.state.dish.title}</h4>
            <button
              className="btn btn-outline-dark"
              onClick={() =>
                this.props.onClickAdd(this.state.dish.title, this.state.dish)
              }
            >
              Add this to menu
            </button>

            {this.props.history.length > 1 ? (
              <button
                className="btn btn-outline-dark"
                onClick={() => this.props.history.goBack()}
              >
                Back to search
              </button>
            ) : (
              ""
            )}
            <div className="row-sp">
              <div className="img">
                <img src={this.state.dish.image} alt="" />
              </div>
              <div className="ingradients">
                <IngredientsList
                  ingredients={this.state.dish.extendedIngredients}
                  nGuests={this.props.nGuests}
                  servings={this.state.dish.servings}
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      content = (
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
    return <div>{content}</div>;
  }
}

export default DishDetails;
/* render() {
    h(
      "div",
      h(
        "div",
        h(
          "div",
          inMenu
            ? h("button", { className: "Nav", disabled: true }, addMessage)
            : h(
                "button",
                { className: "Nav", onClick: e => addAction() },
                addMessage
              ),
          h(
            "button",
            { className: "Nav", onClick: e => cancelAction() },
            cancelMessage
          )
        )
      ),
      //  h("button",{className:"navigationButton",onClick: e=> addAction()}, addMessage),
      //  h("button",{className:"navigationButton",onClick: e=> cancelAction()}, cancelMessage)),
      h(
        "div",
        h(
          "button",
          { className: "Nav", onClick: e => window.open(dish.sourceUrl) },
          "Learn More"
        )
      ),
      h("p", { className: "detailsTitle" }, dish.title),
      h("img", { className: "detailsImg", src: dish.image }),
      h(
        "div",
        { className: "detailsViewInfoText" },
        "Dish Price  ",
        price.toFixed(2),
        "$"
      ),
      h(
        "div",
        "Dish Type  ",
        dish.dishTypes.map(dishtype => h("div", dishtype))
      ),
      h("p", " "),
      h(
        "div",
        h(
          "table",
          { border: "1" },
          h(
            "tr",
            h("th", { className: "td" }, "Ingredients"),
            h("th", { className: "td" }, "Supermarket Aisle")
          ),
          dish.extendedIngredients
            .sort(
              function(a, b) {
                return (
                  a.aisle.localeCompare(b.aisle) || a.name.localeCompare(b.name)
                );
              }.bind(this)
            )
            .map(ingrdient =>
              h(
                "tr",
                { border: "1" },
                h("td", { className: "td" }, ingrdient.name),
                h("td", { className: "td" }, ingrdient.aisle)
              )
            )
        )
      ),
      h("p", " "),
      h(
        "div",
        "Dinner for ",
        guests,
        " people, total price: " + (price * guests).toFixed(2)
      )
    );
  } */
