import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        This is Expense Dashboard Page
        <ExpensesSummary />
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;