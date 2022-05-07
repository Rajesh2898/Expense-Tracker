import React,{ useState } from "react"
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = (props) =>{
    const [isEditing,setIsEditing]=useState(false);
    const onSubmitExpenseDataHandler = (ExpenseData) => {
        const newExpense = {
            ...ExpenseData,
            id : Math.random().toString()
        };
        props.onNewExpenseData(newExpense);
    }

    const IsEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick = {IsEditingHandler}>Add new expense</button>}
            {isEditing && <ExpenseForm onSubmitExpenseData = {onSubmitExpenseDataHandler} onCancel = {stopEditingHandler}/>}
        </div>
    );
 }


export default NewExpense