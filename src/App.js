import React, { Component } from 'react';
import moment from 'moment';
import logo from './calendar-icon-blue.svg';
import Calculator from './Calculator';

class App extends Component {
  constructor() {
      super();

      this.state = {
        workingDays: "?"
      };
  }
  
  componentWillMount() {

    // using Moment.js library
    const todayDate = moment().format('DD-MM-YYYY'); // today
    // const startDate = '01-01-2018'; // jan 1
    const retireDate = '31-12-2018'; // retire/end date
    const holidays = { // UK public holidays
      'New Years Day' : '01-01-2018',
      'Good Friday' : '30-03-2018',
      'Easter Monday' : '02-04-2018',
      'Early May Bank Holiday' : '07-05-2018',
      'Spring Bank Holiday' : '28-05-2018',
      'Summer Bank Holiday' : '27-07-2018',
      'Christmas Day' : '25-12-2018',
      'Boxing Day' : '26-12-2018',
    }
    moment.fn.isBusinessDay = function() {
      // check if public holiday.
        for (let day in holidays) {
            if ( holidays[day] === this.format('DD-MM-YYYY') ) {
                return false;
            }
        }
      // check if a weekday - 0-6 is sun-sat in Moment so 1-5.
        if ( this.day() > 0 && this.day() <= 5 ) return true; 
        return false;
    };

    moment.fn.businessDiff = function (end) {
      // get start and end dates
      var start = this;
      var daysBetween = 0;
      // if days are the same, don't run
      if (start === end) {
        return daysBetween;
      }
      // loop and check if day is business or holiday
      while ( start <= end ) {
        if ( start.isBusinessDay() ) {
          daysBetween++;
        }
        // move forward one day
        start.add(1, 'd');
      }
      return daysBetween;
    };

    // fire fn
    let totalDays = moment( todayDate ,'DD-MM-YYYY').businessDiff(moment( retireDate ,'DD-MM-YYYY'));
    console.warn('%cWorking days in 2018: %c' + totalDays + '','color: green', 'color: red');

    this.setState({ workingDays: totalDays })
  }


  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br/>
          <h1 className="App-title"> Working days until retirement...</h1>

          <Calculator workingDaysDisplay={ this.state.workingDays }  />

        </header>        

      </div>
    );
  }
}

export default App;
