import React, { Component } from "react";
import { Link } from "react-router-dom";
import DishDetails from "../DishDetails/DishDetails";

class Printout extends Component {



    render() {

        return (
            <React.Fragment>
                <h3>Dinner for {this.props.nGuests}</h3>
                <Link to="/selectDish/search?">
                <button className="btn btn-outline-dark">Go back and edit dinner</button>
                </Link>
                {Object.values(this.props.menu)
                    .map(dish => {
                        return(
                        <div key={dish.id}>
                            <h4>{dish.title}</h4>
                            <p>
                                <img className="forceRatio" src={dish.image}/>
                            {dish.instructions}
                            </p>
                        </div>);
                    })}
            </React.Fragment>);

    }
}

export default Printout;