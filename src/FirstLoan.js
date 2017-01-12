import React from 'react';

export default class FirstLoan extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      moneyBorrowed:0, 
      daysNo:0,
      moneyDue:0,
      interest:0,
      PayDay:"",
      extension:0,
      dateMilli:0
    };
  }

/* gets value of money as user changes it */
  getMoneyBorrowed(e){
    let amount = parseInt(e.target.value);
    let surplus = parseInt((amount * 10)/100);
    let total = parseInt(amount+surplus);
    let extendSurplus = parseInt((surplus*1.5)-surplus);
    this.updateValues(amount,surplus,total,extendSurplus);
  }

/* update state variables */
  updateValues(borrowed,interest,due,ext){
    this.setState({
      moneyBorrowed : borrowed,
      interest : interest,
      moneyDue : due,
      extension: ext
    });
  }

/* gets today's date and sets payment date */
  getDaysSetDate(e){
    let days = parseInt(e.target.value);
    let today = new Date();
    var payday = today.setMilliseconds( today.getMilliseconds() + (days * 86400000) );
    var dueDate = new Date(payday).toDateString();
    this.setState({
      daysNo : days,
      dateMilli: payday,
      PayDay: dueDate
    });
  }

/* loan validation function before submission */
  validate(first,clicks){
    let nowDate = new Date().getTime();
    let current = nowDate-first;
    let diff = nowDate-onLoadDate;
    let amount = this.state.moneyBorrowed;
    let days = this.state.daysNo;
    if((diff<30000 && amount==400)){
      alert("We’re Sorry");
      return false;
    }
    else if((amount<50 || amount>400) || (days<5 || days>30)){
      alert("Please make sure the inputs are valid!")
      return false;
    }
    else if(current<=60000 && clicks>3){
      alert("We’re Sorry, please wait 1 minute before your next attempt");
      setTimeout(function() { 
        countClicks = 0;
      }, 60000);
      return false;
    }
    else{
      return true;
    } 
  }

/* submits loans and passes values to parent */
  submit(){
    let firstClickedTime = new Date().getTime();
    countClicks++;
    if(this.validate(firstClickedTime,countClicks)){
      alert("Success!");
      this.props.handler(
       this.state.moneyBorrowed,
       this.state.daysNo,
       this.state.moneyDue,
       this.state.PayDay,
       this.state.extension,
       this.state.dateMilli);
       window.open = "http://localhost:3000/#second";
    }
  }




  render() {
    return (
      <div class="row">
      	<div class="col s12">
      		<div class="card yellow lighten-4">
      			<div class="card-content">
      				<div class="row money-amount">
      					<div class="col s4">
      						<h4>Amount to borrow?</h4>
      					</div>
      					<div class="money-limit">
      						<p>50-400 Eurs</p>
      					</div>
      					<div class="result deep-orange darken-2">
      						
      							<p>Payment Date : {this.state.PayDay} </p>
      							<p>Days : {this.state.daysNo} </p>
      							<p>Amount Borrowed : {this.state.moneyBorrowed} eurs </p>
      							<p>Interest : {this.state.interest} Eurs </p>
      							<p>Total Due : {this.state.moneyDue} Eurs </p>
      							<p>1 week extension : {this.state.moneyDue}+{this.state.extension} Eurs </p>
                    <a class="waves-effect waves-light green lighten btn loan-btn"
                     onClick={this.submit.bind(this)} >Get Loaned!
                    </a>	
      						
      					</div>
      				</div>
      				<div class="row">
      					<div class="input-field col s3">
      						<input ref="moneyAmount" placeholder="Amount" id="amount" type="number"
                         class="validate" min="50" max="400" required
      						       value={this.state.moneyBorrowed} 
                         onChange={this.getMoneyBorrowed.bind(this)} />
         				  <label for="amount">Money in Eurs</label>
      					</div>
      				</div>
      				<div class="row days-amount">
      					<div class="col s4">
      						<h4>How many days?</h4>
      					</div>
      					<div class="days-limit">
      						<p>5-30 days</p>
      					</div>
      				</div>
      				<div class="row">
      					<div class="input-field col s3">
      						<input ref="daysAmount" placeholder="Days" id="days" type="number"
                         class="validate" min="5" max="30" required
      						       value={this.state.daysNo} 
                         onChange={this.getDaysSetDate.bind(this)} />
         				  <label for="days">No. of days</label>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}
