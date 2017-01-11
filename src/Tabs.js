import React from 'react';
import FirstLoan from './FirstLoan';

export default class Tabs extends React.Component {
 
  render() {
    return (
      <div>
      	<div class="col s12">
	      <ul class="tabs">
	        <li class="tab col s3"><a href="#first" class="active">First time</a></li>
	        <li class="tab col s3"><a href="#second">Returning</a></li>
	      </ul>
	    </div>
	    <div id="first" class="col s12"><FirstLoan></FirstLoan></div>
	    <div id="second" class="col s12">Test 2</div>
      </div>
    );
  }
}
