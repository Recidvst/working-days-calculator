import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator-component">
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
