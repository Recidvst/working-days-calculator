// get moment
import moment from 'moment';

// holidays objects
export function getPublicHolidays() {
  const holidays = { // UK public holidays
    'New Years Day' : '01-01-2018',
    'Good Friday' : '30-03-2018',
    'Easter Monday' : '02-04-2018',
    'Early May Bank Holiday' : '07-05-2018',
    'Spring Bank Holiday' : '28-05-2018',
    'Summer Bank Holiday' : '27-07-2018',
    'Christmas Day' : '25-12-2018',
    'Boxing Day' : '26-12-2018',
  }
  return holidays;
}
export function getPersonalHoliday() {
    const holidayAllowance = 25;
    return holidayAllowance;
} 

// export calculation fn
export function calculateWorkingDays(start, end) {

    let startDate = moment().format('DD-MM-YYYY'); // today from moment
    if ( start != null && start.length >= 10 ) {
      startDate = start;
    }

    let retireDate = '31-12-' + moment().format('YYYY'); // end of this year as default 
    if ( end != null && end.length >= 10) {
      retireDate = end;
    }

    // const todayDate = moment().format('DD-MM-YYYY'); // today from moment
    // const startDate = '01-01-2018'; // jan 1
    // const retireDate = '31-12-2018'; // retire/end date
    // const retireDate = '12-07-2058'; // retire/end date

    const publicHolidays = getPublicHolidays();

    moment.fn.isBusinessDay = function() {
      // check if public holiday.
        for ( let day in publicHolidays ) {
            if ( publicHolidays[day] === this.format('DD-MM-YYYY') ) {
                return false;
            }
        }
      // check if a weekday - 0-6 is sun-sat in Moment so 1-5.
        if ( this.day() > 0 && this.day() <= 5 ) return true; 
        return false;
    };

    moment.fn.businessDiff = function (end) {
      // get start and end dates and personal holiday allowance
      let start = this;
      let daysBetween = 0;
      let currentYear = this.year();
      // if days are the same, don't run
      if (start === end) {
        return daysBetween;
      }
      // remove holiday allowance for first year
      daysBetween -= getPersonalHoliday();
      // loop and check if day is business or holiday
      while ( start <= end ) {
        if ( start.isBusinessDay() ) {
          daysBetween++;
        }        
        // apply holiday allowance if year changes and update year var 
        if ( this.year() !== currentYear ) {
          currentYear = this.year();
          daysBetween -= getPersonalHoliday();
        }
        // move forward one day
        start.add(1, 'd');
      }
      return daysBetween;
    };

    // fire fn
    let totalDays = moment( startDate ,'DD-MM-YYYY').businessDiff(moment( retireDate ,'DD-MM-YYYY'));

    return totalDays;

    // console.warn('%cWorking days in 2018: %c' + totalDays + '','color: green', 'color: red');
}