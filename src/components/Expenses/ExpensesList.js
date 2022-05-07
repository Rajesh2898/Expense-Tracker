import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no Expenses.</h2>;
    }
    console.log(props.items);
    return(
        <ul className='expenses-list'>
            {props.items.map(expense => {
                    return (<ExpenseItem 
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date} 
                    />)
            })}
        </ul>
    )
};

export default ExpensesList