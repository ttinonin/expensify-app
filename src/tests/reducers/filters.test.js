import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', ()=>{
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        test: '',
        sortBy: 'date',
        sortDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})