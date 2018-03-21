import React, { Component } from 'react';
import Pie from './../components/Pie';

class Calculator extends Component {

  render() {
    return (
      <div className="calculator-component">
        <div className="calculator-box">
          <div className="display-days">
            <h2>
              Total Days
              <br/>
              <span className="total-days">
                  { this.props.totalDaysDisplay }
              </span>
            </h2>
            <h2>
              Working Days!
              <br/>
              <span className="working-days">
                  { this.props.workingDaysDisplay }
              </span>
            </h2>
          </div>

          <Pie
            data={[this.props.workingDaysDisplay, this.props.totalDaysDisplay]}
          />

        </div>
      </div>
    );
  }
}

export default Calculator;
