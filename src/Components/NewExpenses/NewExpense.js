import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
export default function NewExpense(props) {
  const [isEditing, setisEditing] = useState(false);
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisEditing(false)
  };
  const checkHandler = () => {
    setisEditing(true);
  };
  const cancel=()=>{
setisEditing(false)
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={checkHandler}>Add new Expense</button>}
      {isEditing && <ExpenseForm cancel={cancel} onSaveExpenseData={saveExpenseData} />}
    </div>
  );
}
