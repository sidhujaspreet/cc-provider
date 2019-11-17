import { connect } from 'react-redux';
import FormComponent from './index';
import {fetchCreditCards} from "../../actions/creditCardAction";
import {addCreditCard} from "../../actions/creditCardAction";

export type ICreditCard = {
  name: string;
  number: string;
  limit: number;
  balance?: number;
}

type IState = {
  fetchCreditCards: {
    list: ICreditCard[];
    isFetching: boolean;
  }
  addCreditCard : {
    isFetching: boolean;
  }
}

function mapStateToProps(state: IState) {
  return {
    creditCards: state.fetchCreditCards.list,
    isFetchingCreditCard: state.fetchCreditCards.isFetching,
    ifAddingCreditCard: state.addCreditCard.isFetching,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchCreditCards: () => dispatch(fetchCreditCards),
    addCreditCard: (creditCardInfo: ICreditCard) => dispatch(addCreditCard(creditCardInfo))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
