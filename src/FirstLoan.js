import React from 'react';


export default class FirstLoan extends React.Component {

  constructor() {
    super()
    this.state = {
      MoneyBorrowed:0,
      DaysNo:0,
      MoneyDue:0,
      interest:0,
      PayDay:"",
      extension:0
    };
  }

  getMoneyBorrowed(e){
  	
  	let amount = parseInt(e.target.value);
  	this.setState({MoneyBorrowed : amount});
  	let surplus = parseInt((amount * 10)/100);
  	this.setState({interest : surplus});
  	let total = parseInt(amount+surplus);
  	this.setState({MoneyDue : total});
    let extendSurplus = parseInt((amount * 15)/100) + amount;
    this.setState({extension: extendSurplus});

  }

  getDays(e){
  	
  	let days = e.target.value;
  	this.setState({DaysNo : days});
    let today = new Date();
    var payday = today.setMilliseconds( today.getMilliseconds() + (days * 86400000) );
    var dueDate = new Date(payday).toDateString();
    this.setState({PayDay: dueDate});

  }


  render() {
    return (
      <div class="row">
      	<div class="col s12">
      		<div class="card blue lighten-5">
      			<div class="card-content">
      				<div class="row">
      					<div class="col s3">
      						<p>Amount to borrow?</p>
      					</div>
      					<div class="col s1">
      						<p>50-400 eur</p>
      					</div>
      					<div class="result">
      						
      							<p>Payment Date : {this.state.PayDay} </p>
      							<p>Days : {this.state.DaysNo} </p>
      							<p>Amount Borrowed : {this.state.MoneyBorrowed} eurs </p>
      							<p>Interest : {this.state.interest} eurs </p>
      							<p>Total Due : {this.state.MoneyDue} eurs </p>
      							<p>1 week extension : {this.state.extension} eurs </p>	
      						
      					</div>
      				</div>
      				<div class="row">
      					<div class="input-field col s3">
      						<input placeholder="Amount" id="amount" type="number" class="validate" min="50" max="400" required
      						 value={this.state.MoneyBorrowed} onChange={this.getMoneyBorrowed.bind(this)} />
         				    <label for="amount">Money in Eurs</label>
      					</div>
      				</div>
      				<div class="row">
      					<div class="col s3">
      						<p>How many days?</p>
      					</div>
      					<div class="col s1">
      						<p>5-30 days</p>
      					</div>
      				</div>
      				<div class="row">
      					<div class="input-field col s3">
      						<input placeholder="Days" id="days" type="number" class="validate" min="5" max="30" required
      						value={this.state.DaysNo} onChange={this.getDays.bind(this)} />
         				    <label for="days">No. of days</label>
      					</div>
      				</div>
      			</div>
      			<div class="card-action">
      				<div class="row">
      					<div class="col s6">
      						<a class="waves-effect waves-light btn">Submit</a>
      						<a class="waves-effect waves-light btn">Reset</a>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}
