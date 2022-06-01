import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilter";

const Index = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default Index