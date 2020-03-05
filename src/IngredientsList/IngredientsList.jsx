import React, { Component } from "react";

// PROPS: extendedIngredients object

class IngredientsList extends Component {

    render() {
        return (
            <React.Fragment>
                <h3>Ingredients</h3>
                <table className="table-dark">
                    <tbody>
                        {this.props.ingredients.map(ing =>
                            <tr key={ing.id}>
                                <td>{(ing.amount * this.props.nGuests / this.props.servings).toFixed(2)}</td>
                                <td>{ing.unit}</td>
                                <td>{ing.name}</td>
                                <td>{1 * this.props.nGuests}</td>
                            </tr>)}
                    </tbody>
                </table>
            </React.Fragment>);
    }
}

export default IngredientsList;