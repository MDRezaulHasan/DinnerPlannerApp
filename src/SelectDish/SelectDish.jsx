import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import DishSearch from '../DishSearch/DishSearch';
import DishDetails from '../DishDetails/DishDetails';
import './SelectDish.css';

// PROPS: VARS nGuests, selected dish. CFNS:
class SelectDish extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDish: null,
			showDetails: false,
			showSearch: true,
		};
		this.selectDish = this.selectDish.bind(this);
		this.resetSelection = this.resetSelection.bind(this);
	}

	selectDish(id) {
		this.setState({
			showDetails: true,
			showSearch: false,
		});
		this.props.api.getRecipe(id).then(dish =>
			this.setState({
				selectedDish: dish,
			})
		);
	}

	resetSelection(id) {
		this.setState({
			selectedDish: null,
			showDetails: false,
			showSearch: true,
		});
	}

	render() {
		let dishDetails = <span />;
		if (this.state.showDetails) {
			dishDetails = <div className={this.state.showDetails ? 'col-9' : 'hidden'} />;
		}

		return (
			<div className="container-fluid">
				<div className="row no-gutters">
					<div className="col-sm-3 border-right">
						<Sidebar
							nGuests={this.props.nGuests}
							changeNGuests={this.props.changeNGuests}
							menu={this.props.menu}
							removeFromMenu={this.props.removeFromMenu}
							onConfirmDinner={this.props.onConfirmDinner}
						/>
					</div>

					<div className="col-sm-9">
							<div>
								<Route
                  path={`${this.props.match.path}/search`}
									render={({match,location}) => (
										<DishSearch
                      location={location}
                      match={match}
                      history={this.props.history}
											api={this.props.api}
										/>
									)}
								/>
								<Route
									path={`${this.props.match.path}/dish/:id`}
									render={({match,location,history}) => (
										<DishDetails
                      match={match}
                      history={history}
                      api={this.props.api}
											dish={this.state.selectedDish}
											onClickAdd={this.props.addToMenu}
											onClickBack={this.resetSelection}
											nGuests={this.props.nGuests}
										/>
									)}
								/>
							</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SelectDish;
