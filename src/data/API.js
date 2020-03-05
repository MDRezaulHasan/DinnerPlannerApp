import API_KEY from './API_KEY';

const BASE_URL = 'http://sunset.nada.kth.se:8080/iprog/group/73';
const httpOptions = {
	headers: {
		'X-Mashape-Key': new API_KEY().key,
	},
};

class API {
	constructor(showError) {
        this.showError = showError;
	}

	searchDishes(query, type) {
		console.log(`searching for ${query} with type ${type}`);
		const url = `${BASE_URL}/recipes/search?type=${type}&query=${query}`;
		return fetch(url, httpOptions)
			.then(this.processResponse)
			.then(data => data.results)
			.catch(err => {
				console.log(err);
				this.showError();
			});
	}

	getRecipe(id) {
		const url = `${BASE_URL}/recipes/${id}/information`;
		return fetch(url, httpOptions)
			.then(this.processResponse)
			.catch(err => {
				console.log(err);
				this.showError();
			});
	}

	processResponse(response) {
		if (response.ok) {
			return response.json();
		} else {
			throw response;
		}
	}
}

export default API;
