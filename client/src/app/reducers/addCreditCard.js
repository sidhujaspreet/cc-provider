import {addCreditCard} from "./main/initialState";
import {POST_DATA, POST_DATA_SUCCESS, POST_DATA_FAILURE} from "../actions/creditCardAction";

let addCard = (state = addCreditCard, action) => {
  switch (action.type) {
    case POST_DATA:
      return {...state, ...{isFetching: true}};
    case POST_DATA_SUCCESS:
      return {...state, ...{isFetching: false, status: action.payload}};
    case POST_DATA_FAILURE:
      return {...state, ...{isFetching: false, status: action.payload}};
    default:
      return state;
  }
};

export default addCard;
