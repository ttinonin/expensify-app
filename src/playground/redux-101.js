import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    //se for numero defina increment pelo valor definido, se não defina como 1
    incrementBy
})

const decrementCount = ({decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ setTo = 0 } = {}) => ({
    type: 'SET',
    setTo
}) 

//reducer is a pure function
//the returns are determinated by the inputs
const countReducer = (state = { count: 0 }, action)=>{
    switch (action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.setTo
            }
        default:
            return state;
    }
}

const store = createStore(countReducer)

//smp qnd uma dispatch ocorre ele printa o log
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

//increment
store.dispatch(incrementCount({ incrementBy: 101 }))

store.dispatch(decrementCount({ decrementBy: 12  }))

store.dispatch(resetCount())

store.dispatch(setCount({ setTo: 10 }))