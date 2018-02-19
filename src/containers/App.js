import React, { Component } from 'react';
import Header from './../components/Header';
import Calculator from './../components/Calculator';
import Dates from './../components/Dates';
import Holidays from './../components/Holidays';

import { calculateWorkingDays } from './../helpers/Maths';

class App extends Component {
  constructor() {
      super();

      this.state = {
        workingDays: "?",
        startDate: null,
        endDate: null
      };
      
      this.chooseStartDate = this.chooseStartDate.bind(this);
      this.chooseEndDate = this.chooseEndDate.bind(this);
  }
  chooseStartDate(start) {
        this.setState ({
          startDate: start
        });
  }
  chooseEndDate(end) {
        this.setState ({
          endDate: end
        });
  }
  

  render() {
    return (
      <div className="App">    
          <Header />
          <Calculator workingDaysDisplay={ calculateWorkingDays(this.state.startDate,this.state.endDate) } />
          <div className="options col-xs-12 col-sm-4"> 
            <Dates 
              startDateUpdate={ this.chooseStartDate } 
              endDateUpdate={ this.chooseEndDate } 
            />
            <Holidays />
          </div>
      </div>
    );
  }
}

export default App;
