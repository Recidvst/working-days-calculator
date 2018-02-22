import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Header from './../components/Header';
import Calculator from './../components/Calculator';
import Dates from './../components/Dates';
import Holidays from './../components/Holidays';

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
        this.setState ({
          startDate: start,
          workingDays: calculateWorkingDays(this.state.startDate,this.state.endDate).daysBetween,
          totalDays: calculateWorkingDays(this.state.startDate,this.state.endDate).totalDays
        });
  }
  chooseEndDate(end) {
        this.setState ({
          endDate: end,
          workingDays: calculateWorkingDays(this.state.startDate,this.state.endDate).daysBetween,
          totalDays: calculateWorkingDays(this.state.startDate,this.state.endDate).totalDays
        });
  }
  

  render() {
    return (
      <div className="App">    
          <Header />

          <div className="col-xs-12 col-sm-4 pull-left"> 
            <Dates 
              startDateUpdate={ this.chooseStartDate } 
              endDateUpdate={ this.chooseEndDate } 
            />
          </div>

          <div className="col-xs-12 col-sm-4"> 
            <Calculator workingDaysDisplay={ this.state.workingDays } totalDaysDisplay={ this.state.totalDays } />
          </div>
        
          <div className="col-xs-12 col-sm-4">
            <Holidays /> 
          </div>

      </div>
    );
  }
}

App.propTypes = {
  workingDays: PropTypes.string,
  startDate: PropTypes.object,
  endDate: PropTypes.object,
};

export default App;
