import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import * as qs from 'query-string';

class DishSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [],
			isSearching: false,
			query: '',
			type: '',
		};
		this.searchCurrent = this.searchCurrent.bind(this);
	}

	searchCurrent() {
		this.getDishes(this.state.query, this.state.type);
	}

	getDishes(query, type) {
		this.props.history.replace(`/selectDish/search?q=${query}&t=${type}`);
		this.setState({ isSearching: true });
		this.props.api.searchDishes(query, type).then(res => {
			this.setState({ searchResults: res, isSearching: false });
		});
	}

	componentDidMount() {
		const terms = qs.parse(this.props.location.search);
		const { q, t } = terms;

		if (q || t) {
			this.setState({ query: q ? q : '', type: t ? t : '' }, this.getDishes(q, t));
		} else this.getDishes('', '');
	}

	render() {
		let content = (
			<div
				onKeyPress={event => {
					if (event.key == 'Enter') {
						this.searchCurrent();
					}
				}}
			>
				<h3>Find a dish</h3>
				<SearchBar
					query={this.state.query}
					type={this.state.type}
					setType={t => this.setState({ type: t },this.searchCurrent)}
					setQuery={q => this.setState({ query: q })}
					search={this.searchCurrent}
				/>
				<SearchResults
					searchResults={this.state.searchResults}
					onClickDish={this.props.onClickDish}
					isSearching={this.state.isSearching}
				/>
			</div>
		);
		return <React.Fragment>{content}</React.Fragment>;
	}
}

export default DishSearch;
