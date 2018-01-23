import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <h1>
            <span>
                { this.props.workingDaysDisplay }
            </span>
        </h1>
      </div>
    );
  }
}

export default Calculator;
