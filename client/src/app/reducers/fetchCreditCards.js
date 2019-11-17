import {fetchCreditCards} from "./main/initialState";
import {FETCH_DATA, FETCH_DATA_SUCCESS, FETCHING_DATA_FAILURE} from "../actions/creditCardAction";

let fetchCards = (state = fetchCreditCards, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {...state, ...{isFetching: true}};
    case FETCH_DATA_SUCCESS:
      return {...state, ...{isFetching: false, list: action.payload}};
    case FETCHING_DATA_FAILURE:
      return {...state, ...{isFetching: false, error: action.payload}};
    default:
      return state;
  }
};

export default fetchCards;
