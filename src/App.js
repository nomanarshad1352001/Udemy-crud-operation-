import React, { useState } from 'react';
import Expanse from "./Components/Expansess/Expanse.js";
import NewExpense from "./Components/NewExpenses/NewExpense.js";
const DummyExpense = [
  {
    id:1,
    date: new Date(2022, 9, 12),
    title: "Car insurance",
    amount: 2579,
  },
  {
    id:2,
    date: new Date(2022, 10, 12),
    title: "Bus insurance",
    amount: 5655,
  },
  {
    id:3,
    date: new Date(2022, 11, 12),
    title: "company insurance",
    amount: 8546,
  },
  {
    id:4,
    date: new Date(2022, 12, 12),
    title: "Home insurance",
    amount: 48746,
  },
];
function App() {
  const [expenses, setexpenses] = useState(DummyExpense)
  const addExpense =(expense)=>{
    setexpenses(
      (prevExpense)=>{
        return[expense,...prevExpense]
      }
    )
  }
  console.log(expenses);
  return (
    <div>
      <NewExpense onAddExpense={addExpense}/>
      <Expanse expense={expenses} />
    </div>
  );
}

export default App;
