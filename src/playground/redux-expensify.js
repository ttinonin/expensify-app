import { combineReducers, createStore } from "redux";
import uuid from 'uuid';

//ADD_EXPENSE



//Expenses reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'ADD_EXPENSE':
            return state.concat(action.expense)
        case 'REMOVE_EXPENSE':
            return state.filter(({ id })=>{
                return id !== action.id
            })
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else{
                    return expense
                }
            })
        default:
            return state;
    }
}

//Filter reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type){
        default:
            return state
    }
}

const getVisibleExpenses = (expenses, { text, sortBy, endDate }) => {
    return expenses.filter((expense)=>{
        const endDateMatch = expense.endDate;
        

    })
}
//Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)
store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}))
const expenseTwo = store.dispatch(addExpense({description: 'Buy', amount: 300}))

store.dispatch(removeExpense({ id: expenseTwo.expense.id }))
store.dispatch(editExpense({id: expenseOne.expense.id, updates: 'DANIEL SILVA?'}))
store.dispatch(sortByAmount());
store.dispatch(sortByDate())
store.dispatch(setEndDate(128))

console.log(store.getState())

const demoState = {
    expenses: [{
        id: 'bdsasnxlkjankns',
        description: 'January Rent',
        note: 'Final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}

const user = {
    name: 'Gian',
    age: 18
}

console.log({
    ...user,
    loaction: "SP",
    city: "SBC"
})