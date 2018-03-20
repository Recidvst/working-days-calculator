import React, { Component } from 'react';
// import PropTypes from 'prop-types'

class Holidays extends Component {

  constructor() {
      super();

      this.state = {
      };

      this.reflectHolidayInputChanges = this.reflectHolidayInputChanges.bind(this);
  }

  reflectHolidayInputChanges(e) {
  } 

  render() {
    return (
      <div className="holidays-component">
        <h3>Public Holidays</h3>
        <hr/>

      </div>
    );
  }
}

Holidays.propTypes = {
};

export default Holidays;
