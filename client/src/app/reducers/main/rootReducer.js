import {combineReducers} from 'redux';
import fetchCreditCards from "../fetchCreditCards";
import addCreditCard from "../addCreditCard";

export default combineReducers({
  fetchCreditCards,
  addCreditCard
});
