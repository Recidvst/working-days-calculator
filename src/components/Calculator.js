import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator-component col-xs-12 col-sm-8 pull-right">
        <h2>
            Days remaining... 
        </h2>
        <h2>
            <span>
                { this.props.workingDaysDisplay }
            </span>
        </h2>
      </div>
    );
  }
}

export default Calculator;
