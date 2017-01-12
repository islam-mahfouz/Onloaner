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
  extend(e){
    e.preventDefault();
    $(".xtnd").css("background-color","red");
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
      return(
            <tr key={index}>
              <td>{item.moneyBorrowed} Eur</td>
              <td>{days}</td>
              <td>{value} Eur</td>
              <td>{date}<span><a id={index} class="waves-effect waves-light btn small green lighten xtnd"
                                 onClick={that.extend.bind(that,index)}>Extend!
                              </a>
                        </span>
              </td>
              <td>{newdays}</td>
              <td>{newvalue}</td>
              <td></td>
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
              <th data-field="price">Extended (Days)</th>
              <th data-field="price">Extended (Amount)</th>
              <th data-field="price">New Payment Date</th>

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
