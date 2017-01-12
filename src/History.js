import React from 'react';


/* a table to show the history of the client's loans */

export default class History extends React.Component {

 constructor(props) {
    super(props)
    this.state = {
      extended:false // refers to having the loan extended or not
   
    };
  }


/* change state variable on extend button press */
  extend(){
    this.setState({
  		extended: true
  	});
  }

  render() {
    var items = this.props.loan;
    /*var extendBtn = <a class="waves-effect waves-light btn small green lighten" onClick={this.extend.bind(this)}>Extend!</a>;
    if(this.state.extended)
      {
        value = this.props.moneyDue + this.props.extension;
        var newDate = this.props.dateMilli + (7 * 86400000);
        date = new Date(newDate).toDateString();
        days = parseInt(days) + 7;
        extendBtn = <strong>Already Extended!</strong>;
      }*/
    var itemslist = items.map(function(item, index){
      var value = item.moneyDue; // Money to be paid
      var date = item.PayDay;    // Date of payment
      var days = item.daysNo;    // Number of loan days
      

      
        return(
            <tr key={index}>
              <td>{item.moneyBorrowed} Eur</td>
              <td>{days}</td>
              <td>{value} Eur</td>
              <td>{date}<span><a class="waves-effect waves-light btn small green lighten">Extend!</a></span></td>
            </tr>
          );
    })



  	

    return (
      <div class="row">
      	<div class="col s12">
      		<div class="card blue lighten-5">
      			<div class="card-content">
      				<table class="bordered highlight">
        <thead>
          <tr>
              <th data-field="id">Amount Borrowed</th>
              <th data-field="name">Days</th>
              <th data-field="price">Total Due</th>
              <th data-field="price">Payment Date</th>
          </tr>
        </thead>

        <tbody>
          {itemslist}
        </tbody>
      </table>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}
