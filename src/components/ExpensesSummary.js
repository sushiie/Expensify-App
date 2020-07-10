import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import totalAmount from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({expensesCount, expensesTotal}) =>{
        const expensesWord = expensesCount > 1 ? 'expenses' : 'expense';
        const formattedAmount = numeral(expensesTotal/100).format('$0,0.00');
        return (
            <div>
                {   
                    (<h1>Viewing {expensesCount} {expensesWord} totalling {formattedAmount}</h1>)
                }
            </div>
        );
};
const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: totalAmount(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);