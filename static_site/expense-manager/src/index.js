import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseEntryItem from './ExpenseEntryItem';

const item = {
	id:1,
	name:"Grape Juice",
	amount: 30.5,
	spendDate: new Date("2010-10-10"),
	category: "Food"
}

ReactDOM.render(
  <React.StrictMode>
    <ExpenseEntryItem item={item}/>
  </React.StrictMode>,
  document.getElementById('root')
);
