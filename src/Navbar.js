import React from 'react';

/* redirects to nothing, just there for demonstration and proper layout*/
 
export default class Navbar extends React.Component {
 
  render() {
    return (
      <nav class="deep-orange darken-3">
        <div class="nav-wrapper">
          <a href="javascript:" class="brand-logo">Onloaner</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="javascript:">Home</a></li>
            <li><a href="javascript:">About Us</a></li>
            <li><a href="javascript:">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
