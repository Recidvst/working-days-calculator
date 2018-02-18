import React, { Component } from 'react';
import Calculator from './Calculator';

import logo from './calendar-icon-blue.svg';
import { calculateWorkingDays } from './helpers/Maths';

class App extends Component {
  constructor() {
      super();

      this.state = {
        workingDays: "?"
      };
  }
  
  componentWillMount() {

    // this.setState({ workingDays: calculateWorkingDays( null, '12-07-2058' ) })
    this.setState({ workingDays: calculateWorkingDays() })

  }

  render() {
    return (
      <div className="App">

        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <br/>
          <h1 className="title"> Working days until retirement... </h1>

          <Calculator workingDaysDisplay={ this.state.workingDays }  />

        </header>        

      </div>
    );
  }
}

export default App;
