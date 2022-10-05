import React, { useState } from "react";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpenseFilter";
import ExpenseItem from "../ExpenseItem";
import ExpenssChart from "../ExpenssChart";

export default function Expanse(props) {
  const [filterYear, setfilterYear] = useState(2020);
  const filterChangeHandler = (selectedYear) => {
    setfilterYear(selectedYear);
  };
  const filteredExpense = props.expense.filter((expens) => {
    return expens.date.getFullYear().toString() === filterYear;
  });
  let expenseContent = <p>No content here</p>;
  if (filteredExpense.length > 0) {
    expenseContent = filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />
        {expenseContent}
        <ExpenssChart expenses={filteredExpense}/>
      </Card>
    </div>
  );
}
