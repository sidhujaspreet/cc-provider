import * as React from 'react';

import './index.scss';
import {ICreditCard} from "./container";

type Props = {
    fetchCreditCards: () => void
    addCreditCard: (creditCard: ICreditCard) => void
    creditCards: ICreditCard[]
    idAddingCreditCard: boolean
    isFetchingCreditCard: boolean
}
type State = {
    creditCardInfo: ICreditCard | any
}

class FormComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            creditCardInfo: {},
        };
        this.onFormChange = this.onFormChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchCreditCards();
    }

    submitAddForm = () => {
        this.props.addCreditCard(this.state.creditCardInfo);
    };

    onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const creditCardInfo = {...this.state.creditCardInfo, [e.target.name]: e.target.value, balance: 0};
        this.setState({creditCardInfo});
    };

    addCard = () => {
        const {name, number, limit} = this.state.creditCardInfo;
        return (
            <form className='add-card-form' onSubmit={this.submitAddForm}>
                <p className='label'>Name</p>
                <input className='card-name' name='name' type='text' onChange={this.onFormChange} value={name} required/>
                <p className='label'>Number</p>
                <input name='number' type='text' onChange={this.onFormChange} value={number} pattern='[0-9]{10}'
                       required/>
                <p className='label'>Limit</p>
                <input name='limit' type='number' min='0' onChange={this.onFormChange} value={limit} required/>

                <div className='btn-wrap'>
                    <button className='addCard' type='submit'>Add</button>
                </div>
            </form>
        );
    };

    showAllCards = () => {
        const creditCards = this.props.creditCards;
        const balanceClass =  (c: ICreditCard) =>  c.balance && c.balance > 0 ? 'green' : 'red';
        return creditCards ? (
            <table className='card-table'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Balance</th>
                    <th>Limit</th>
                </tr>
                </thead>
                <tbody>
                {creditCards.map((creditCard, index) => (
                    <tr className='table-row' key={index}>
                        <td>{creditCard.name}</td>
                        <td>{creditCard.number}</td>
                        <td className={`${balanceClass(creditCard)}`}>&euro; {creditCard.balance}</td>
                        <td>&euro; {creditCard.limit}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        ) : '';
    };

    render() {
        return (
            <div className="panel-group form-wrapper">
                <div className='heading'>Add</div>
                {this.props.idAddingCreditCard ? 'Adding..' : this.addCard()}
                <div className='heading'>Existing Cards</div>
                {this.props.isFetchingCreditCard ? 'Loading..' : this.showAllCards()}
            </div>
        );
    }
}

export default FormComponent;
