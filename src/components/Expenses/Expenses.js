import React,{useState} from 'react'
import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';
 
function Expenses(props){
    const [filteryear , setFilterYear] =useState('2022');
    const filtered_expense = props.data.filter((expense) =>{
        return expense.date.getFullYear().toString()===filteryear;
    });

    const onPassYearHandler = (FilterYear) => {
        setFilterYear(FilterYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpenseChart expenses = {filtered_expense} />
                <ExpensesFilter 
                    selected = {filteryear} 
                    onPassYear = {onPassYearHandler} 
                />
                <ExpensesList items={filtered_expense} />
            </Card>
        </div>
    
    );
}

export default Expenses