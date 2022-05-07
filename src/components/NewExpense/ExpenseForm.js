import React,{ useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) =>{
    const [title,setTiltle] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');

    const titleChangeHandler = (event) =>{
        setTiltle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }
    const SubmitHandler = (event) =>{
        event.preventDefault();
        const ExpenseData ={
            title : title,
            amount : +amount,
            date : new Date(date)
        };
        props.onSubmitExpenseData(ExpenseData);
        props.onCancel();
        setTiltle('');
        setAmount('');
        setDate('');
    };
    

    return (
        <form onSubmit={SubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={title}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={amount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2022-01-01" max="2025-12-31" onChange={dateChangeHandler} value={date} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm