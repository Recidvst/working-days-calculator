import React, { Component } from 'react';
import logo from './../images/calendar-icon-blue.svg';

class Header extends Component {
  render() {
    return (
      <div className="header-component col-xs-12">      
            <header>
                <h1 className="title"> Working Days Calculator </h1>    
            </header> 
      </div>
    );
  }
}

export default Header;
