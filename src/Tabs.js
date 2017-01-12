import React from 'react';
import FirstLoan from './FirstLoan';
import History from './History';

/* -switches between getting a loan and seeing loan history
   -contains the state variables which are updated by the
   FirstLoan component and then passed down to History */

export default class Tabs extends React.Component {
 
 constructor(props) {
    super(props)
    this.state = {
    	moneyBorrowed:0, daysNo:0, moneyDue:0, PayDay:"",extension:0, dateMilli:0
    };
  }

/* updates the state variables before passing to History */
  handler(money,daysCount,dueMoney,datePay,ext,date){
  	this.setState({
  		moneyBorrowed:money,
  		daysNo:daysCount,
  		moneyDue: dueMoney,
  		PayDay:datePay,
  		extension:ext,
  		dateMilli:date
  	});
  }

  render() {
    return (
      <div>
      	<div class="col s12">
	      <ul class="tabs">
	        <li class="tab col s3"><a href="#first" class="active">Get a loan</a></li>
	        <li class="tab col s3"><a href="#second">History</a></li>
	      </ul>
	    </div>
	    <div id="first" class="col s12"><FirstLoan handler={this.handler.bind(this)}></FirstLoan></div>
	    <div id="second" class="col s12"><History moneyBorrowed = {this.state.moneyBorrowed}
	    										  daysNo = {this.state.daysNo}
	    										  moneyDue = {this.state.moneyDue}
	    										  PayDay = {this.state.PayDay}
	    										  extension = {this.state.extension}
	    										  dateMilli = {this.state.dateMilli} >
	    								</History>
	    </div>
      </div>
    );
  }
}
