import React from 'react';
import Navbar from './Navbar';
import Tabs from './Tabs';

export default class Application extends React.Component {
 
  render() {
    return (
      <div>
      <Navbar></Navbar>
      <Tabs></Tabs>
      </div>
    );
  }
}
