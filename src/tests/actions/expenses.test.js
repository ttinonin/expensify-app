import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should set up remove expense action object', ()=>{
    const action = removeExpense({ id: '123daniel' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123daniel'
    })
})

test('should edit expense object', ()=>{
    const action = editExpense({id: '123daniel', note: 'semem' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123daniel',
        updates:  expect.any(Object)
    })
})