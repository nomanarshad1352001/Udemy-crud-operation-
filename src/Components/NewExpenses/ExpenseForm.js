import "./ExpensesForm.css";
import React, { useState } from "react";

export default function ExpenseForm(props) {
  const submitForm = (event) => {
    event.preventDefault();
    const expensesData = {
      title: Title,
      amount: Amount,
      date: new Date(date),
    };
   props.onSaveExpenseData(expensesData);
    setTitle('');
    setAmount('');
    setDate('');
  };
  const inputTextHandler = (event) => {
    setTitle(event.target.value);
    // console.log(event.target.value);
  };
  const inputAmountHandler = (event) => {
    setAmount(event.target.value);
    // console.log(event.target.value);
  };
  const inputDateHandler = (event) => {
    setDate(event.target.value);
    // console.log(event.target.value);
  };
  const [Title, setTitle] = useState("");
  const [Amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={Title} onChange={inputTextHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={Amount} 
              onChange={inputAmountHandler}
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={date} 
              onChange={inputDateHandler}
              min="2019-01-01"
              max="2022-12-31"
            />
          </div>
          <div className="new-expense__actions ">
          <button onClick={props.Cancel} type="cancel">Cancel</button>
            <button type="submit">Add Expenses</button>
          </div>
        </div>
      </form>
    </div>
  );
}
