import * as React from 'react';
import {mount, shallow} from 'enzyme';
import FormComponent from '../../../app/pages/credit-cards';
import sinon from 'sinon';

describe('Credit card Page:', () => {

    const defaultProps = {
        fetchCreditCards: () => {
        },
        addCreditCard: (creditCard) => {
        },
        creditCards: [
            {
                name: 'one',
                number: 123456,
                limit: 2000,
                balance: 100,
            }, {
                name: 'two',
                number: 1222,
                limit: 1000,
                balance: 50,
            },
        ],
        idAddingCreditCard: false,
        isFetchingCreditCard: false,
    };

    let formComponent = mount(<FormComponent {...defaultProps} />);

    it('should contain add credit card form', () => {
        expect(formComponent.find('.add-card-form').length).toBe(1);
    });

    it('input value change should change state value', () => {
        const creditCardInfo = {
            name: 'old-name',
            number: 123456,
            limit: 2000,
        };
        formComponent.setState({creditCardInfo});
        formComponent.update();

        expect(formComponent.state('creditCardInfo').name).toEqual('old-name');

        formComponent.find('.card-name').simulate('change', {target: {name: 'name', value: 'new-name'}});

        expect(formComponent.state('creditCardInfo').name).toEqual('new-name');
    });

    it('should submit the form with set values', () => {
        const addCreditCard = sinon.spy();
        const props = {
            ...defaultProps,
            addCreditCard,
        };
        const component = shallow(<FormComponent {...props} />);

        component.instance().submitAddForm();

        expect(addCreditCard.calledOnce).toBe(true);
    });

    it('should contain credit card table', () => {
        expect(formComponent.find('.card-table').length).toBe(1);
    });

    it('should contain correct row count', () => {
        expect(formComponent.find('.table-row').length).toBe(2);
    });

    it('match snapshot', () => {
        expect(formComponent).toMatchSnapshot();
    })
});
