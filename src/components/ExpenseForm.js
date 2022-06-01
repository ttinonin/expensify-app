import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css'

const now = moment()
console.log(now.format("dddd/MMMM/YYYY"))

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note :'',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: undefined
        }
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=>{
            return{
                description: description
            }
        })
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>{
                return{
                    amount: amount
                }
            })
        }
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=>{
            return{
                note: note
            }
        })
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(()=>{
                return {
                    createdAt: createdAt
                }
            })
        }
    }
    onSubmit = (e) => {
        e.preventDefault()

        if(!this.state.description || !this.state.amount){
            this.setState(()=>{
                return {
                    error: "Please provide a description and amount!"
                }
            })
        } else {
            this.setState(()=>{
                return {
                    error: undefined
                }
            })
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(()=>{
            return {
                calendarFocused: focused
            }
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        autoFocus
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=>false} //permite marcar qqr dia
                    />
                    <textarea
                        value={this.state.note}
                        placeholder="Add a note for your expense (optional)"
                        onChange={this.onNoteChange}
                    >

                    </textarea>
                    <button type="submit">Add Expense</button>
                </form>
                {!!this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}