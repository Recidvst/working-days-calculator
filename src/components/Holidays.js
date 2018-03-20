import React, { Component } from 'react';
import PropTypes from 'prop-types'
import HolidaySingle from './../components/HolidaySingle';

class Holidays extends Component {

  constructor() {
      super();

      this.state = {
        publicHolidays: [
          {name: 'New Years Day', date: '01-01-2018'},
          {name: 'Good Friday' , date: '30-03-2018'},
          {name: 'Easter Monday' , date: '02-04-2018'},
          {name: 'Early May Bank Holiday' , date: '07-05-2018'},
          {name: 'Spring Bank Holiday' , date: '28-05-2018'},
          {name: 'Summer Bank Holiday' , date: '27-07-2018'},
          {name: 'Christmas Day' , date: '25-12-2018'},
          {name: 'Boxing Day' , date: '26-12-2018'}
        ]
      };

      this.removeHolidayEntry = this.removeHolidayEntry.bind(this);
  }

  // add
  addHolidayEntry() {

  }
  // remove
  removeHolidayEntry(e) {
    var updatedHolidays = this.state.publicHolidays.filter( (entry, index) => {
      return entry.name !== e.target.id;
    })
    this.setState({
      publicHolidays: updatedHolidays
    })
    this.props.handleDateUpdates(e,'holidayUpdated',updatedHolidays); 
  }
  
  render() {
    return (
      <div className="holidays-component">
        <h3>Public Holidays</h3>
        <hr/>

        <div className="holiday-entries">
          <ul>
            {
              this.state.publicHolidays.map( 
                (item, index) => 
                  <HolidaySingle 
                    key={index} 
                    name={item.name} 
                    date={item.date} 
                    removeHolidayItem={ this.removeHolidayEntry }  
                  />
                )
            }
          </ul>
        </div>

      </div>
    );
  }
}

Holidays.propTypes = {
  publicHolidays: PropTypes.array  
};

export default Holidays;
