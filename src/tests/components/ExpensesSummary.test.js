import { shallow } from 'enzyme';
import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should display message for 1 expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={1000}/>);
    expect(wrapper).toMatchSnapshot();
});


test('Should display message for multiple expenses correctly', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={5} expensesTotal={8900}/>);
    expect(wrapper).toMatchSnapshot();
});