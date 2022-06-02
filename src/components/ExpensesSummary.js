import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expensesWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00')
    return(
        <div>
            <h1>Visiting {expenseCount} {expensesWord} totalling {formattedExpensesTotal}</h1>
        </div>
    )
}

const mapStateProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateProps)(ExpensesSummary)