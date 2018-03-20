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
        endDate: null
      };
      
      this.chooseStartDate = this.chooseStartDate.bind(this);
      this.chooseEndDate = this.chooseEndDate.bind(this);
  }

  chooseStartDate(start) {
    start = moment(start.target.value).format('DD-MM-YYYY');
        this.setState ({
          startDate: start,
          workingDays: calculateWorkingDays(start,this.state.endDate).daysBetween,
          totalDays: calculateWorkingDays(start,this.state.endDate).totalDays
        });        
  } 
  chooseEndDate(end) {
    end = moment(end.target.value).format('DD-MM-YYYY');
        this.setState ({
          endDate: end,
          workingDays: calculateWorkingDays(this.state.startDate,end).daysBetween,
          totalDays: calculateWorkingDays(this.state.startDate,end).totalDays
        });
  }

  render() {
    return (
      <div className="App">    
          <Header />

          <div className="col-xs-12"> 
            <Dates 
              startDateUpdate={ this.chooseStartDate } 
              endDateUpdate={ this.chooseEndDate } 
            />
          </div>

          <div className="col-xs-12"> 
            <Calculator workingDaysDisplay={ this.state.workingDays } totalDaysDisplay={ this.state.totalDays } />
          </div>
        
          <div className="col-xs-12">
            <Holidays /> 
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
};

export default App;
