import React from 'react';
import './ExpenseEntryItem.css';
import FormattedMoney from './FormattedMoney';
import FormattedDate from './FormattedDate';

class ExpenseEntryItem extends React.Component{
    render(){
        return(
            <div className="itemStyle">
	        <div><b>Item:</b> <em>{this.props.item.name}</em></div>
		<div><b>Amount:</b> <em>{this.props.item.amount}</em></div>
		<div><b>Spend Date:</b> <em>{this.props.item.spendDate}</em></div>
		<div><b>Category:</b> <em>{this.props.item.category}</em></div>
	    </div>
        );
    }
}

export default ExpenseEntryItem;
