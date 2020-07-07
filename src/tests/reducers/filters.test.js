import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should set up default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});


test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount');
});

test('shoud set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE'};
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'This is new filter';
    const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text})
    expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
    const startDate = moment(0).valueOf();
    const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate })
    expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
    const endDate = moment(0).valueOf();
    const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate })
    expect(state.endDate).toEqual(endDate);
});