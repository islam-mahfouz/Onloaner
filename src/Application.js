import React from 'react';
import Navbar from './Navbar';
import Tabs from './Tabs';

/* this is the index page for the website start point */

export default class Application extends React.Component {
 
  render() {
    return (
      <div>
      <Navbar></Navbar>
      <Tabs class="tabs"></Tabs> {/* includes 2 child components */}
      </div>
    );
  }
}
