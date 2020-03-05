import ObservableModel from "./ObservableModel";
import API_KEY from "./API_KEY";

const BASE_URL = "http://sunset.nada.kth.se:8080/iprog/group/73";
const httpOptions = {
  headers: { "X-Mashape-Key": new API_KEY().key }
};

class DinnerModel extends ObservableModel {
  constructor() {
    super();
    this._numberOfGuests = 2;
    this.getNumberOfGuests();
    this._selectedDish = "";
  }

  /**
   * Get the number of guests
   * @returns {number}
   */
  getNumberOfGuests() {
    return this._numberOfGuests;
  }

  /**
   * Set number of guests
   * @param {number} num
   */
  setNumberOfGuests(num) {
    this._numberOfGuests = num;
    this.notifyObservers();
  }

  getSelectedDish() {
    return this._selectedDish;
  }

  /**
   * Set selected dish
   * @param {number} id
   */
  selectDish(id) {
    this.getRecipe(id)
      .then(res => {
        this._selectedDish = res;
      })
      .then(this.notifyObservers("dish selected"));
  }

  getRecipe(id) {
    const url = `${BASE_URL}/recipes/` + id + `/information`;
    return fetch(url, httpOptions).then(this.processResponse);
  }

  // API methods

  /**
   * Do an API call to the search API endpoint.
   * @returns {Promise<any>}
   */
  getAllDishes() {
    const url = `${BASE_URL}/recipes/search`;
    return fetch(url, httpOptions).then(this.processResponse);
  }

  processResponse(response) {
    if (response.ok) {
      return response.json();
    }
    throw response;
  }
}

// Export an instance of DinnerModel
const modelInstance = new DinnerModel();
export default modelInstance;
