import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Header from './../components/Header';
import Calculator from './../components/Calculator';
import Dates from './../components/Dates';
import Holidays from './../components/Holidays';

import moment from 'moment';
import { calculateWorkingDays } from './../helpers/WorkingDays';
import './../helpers/Easter';

class App extends Component {
  constructor() {
      super();

      this.state = {
        workingDays: calculateWorkingDays().daysBetween,
        totalDays: calculateWorkingDays().totalDays,
        startDate: null,
        endDate: null,
        weekStart: 'Monday',
        weekEnd: 'Friday'
      };
      
      this.handleChanges = this.handleChanges.bind(this); 
  }

  handleChanges(e, type) {
    if (type === 'start') {
      let start = moment(e.target.value).format('DD-MM-YYYY');
      this.setState ({
        startDate: start,
        workingDays: calculateWorkingDays(start, this.state.endDate, this.state.weekStart, this.state.weekEnd).daysBetween,
        totalDays: calculateWorkingDays(start, this.state.endDate, this.state.weekStart, this.state.weekEnd).totalDays
      });
    }
    if (type === 'end') {
      let end = moment(e.target.value).format('DD-MM-YYYY');
      this.setState ({
        endDate: end,
        workingDays: calculateWorkingDays(this.state.startDate, end, this.state.weekStart, this.state.weekEnd).daysBetween,
        totalDays: calculateWorkingDays(this.state.startDate, end, this.state.weekStart, this.state.weekEnd).totalDays
      });
    }
    if (type === 'weekStart') {
      let day = e.target.value;
      this.setState ({
        weekStart: day,
        workingDays: calculateWorkingDays(this.state.startDate, this.state.endDate, day, this.state.weekEnd).daysBetween,
        totalDays: calculateWorkingDays(this.state.startDate, this.state.endDate, day, this.state.weekEnd).totalDays
      });
    }
    if (type === 'weekEnd') {
      let day = e.target.value;
      this.setState ({
        weekEnd: day,
        workingDays: calculateWorkingDays(this.state.startDate, this.state.endDate, this.state.weekStart, day).daysBetween,
        totalDays: calculateWorkingDays(this.state.startDate, this.state.endDate, this.state.weekStart, day).totalDays
      });
    }
  }

  render() {
    return (
      <div className="App">    
          <Header />

          <div className="col-xs-12 col-sm-6"> 
            <Calculator workingDaysDisplay={ this.state.workingDays } totalDaysDisplay={ this.state.totalDays } />
          </div>

          <div className="col-xs-12 col-sm-6"> 
            <h2> Configuration </h2>
            <Dates 
              handleDateUpdates={ this.handleChanges } 
            />
            <Holidays 
            /> 
          </div>

      </div>
    );
  }
}

App.propTypes = {
  workingDays: PropTypes.object,
  totalDays: PropTypes.object,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  weekStart: PropTypes.string,
  weekEnd: PropTypes.string
};

export default App;
