import expenses from '../fixtures/expenses';
import expenseTotal from '../../selectors/expenses-total'


test('should return 0 if no expenses', () => {
    const result = expenseTotal([]);
    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const result = expenseTotal([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
});

test('should correctly add up a multiple expenses', () => {
    const result = expenseTotal(expenses);
    let total = 0;
    expenses.map((expense) => {
        total = total + expense.amount;
    });
    expect(result).toBe(total);
});
