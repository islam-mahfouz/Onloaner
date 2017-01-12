import React from 'react';


/* a table to show the history of the client's loans */

export default class History extends React.Component {

/* change state variable on extend button press */
  extend(index){
  
  var x = index;
  $("#"+x).removeClass("green");
  $("#"+x).addClass("red");
  $("#"+x).text("Extended!");
  $("#"+x).prop("disabled","true");

}

  render() {
    var items = this.props.loan;
    var that = this;
    var itemslist = items.map(function(item, index){
      var value = item.moneyDue; // Money to be paid
      var date = item.PayDay;    // Date of payment
      var days = item.daysNo;    // Number of loan days
      var newdays = days+7;
      var newvalue = value+item.extension;
      var dateInMs = item.dateMilli;
      var newDateMs = dateInMs+(7 * 86400000);
      var newdate = new Date(newDateMs).toDateString();
      return(
            <tr key={index}>
              <td>{item.moneyBorrowed} Eur</td>
              <td>{days}</td>
              <td>{value} Eur</td>
              <td>{date}<span><a id={index} class="waves-effect waves-light btn small green lighten"
                                 onClick={that.extend.bind(that,index)}>Extend!
                              </a>
                        </span>
              </td>
              <td>{newdays}</td>
              <td>{newvalue}</td>
              <td>{newdate}</td>
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
              <th data-field="amountBorrowed">Amount Borrowed</th>
              <th data-field="Days">Days</th>
              <th data-field="totalDue">Total Due</th>
              <th data-field="paymentDate">Payment Date</th>
              <th  data-field="extendedDays">Extended (Days)</th>
              <th  data-field="extendedAmount">Extended (Amount)</th>
              <th data-field="newDate">New Payment Date</th>

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
