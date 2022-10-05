import Card from "./Card/Card.js";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseSheet.css";

export default function ExpenseItem(props) {
  return (
      <Card className="expense-item">
        <h2><ExpenseDate date={props.date}/></h2>
     
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>

  );
}
