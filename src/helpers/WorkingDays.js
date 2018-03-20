// get moment
import moment from 'moment';
moment.locale('en-my-settings', {
  // customizations.
});

// public holidays export
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

// export calculation fn
export function calculateWorkingDays(start, end, weekStart, weekEnd) {

    // start
    let startDate = moment().format('DD-MM-YYYY'); // today from moment
    if ( start != null ) {
      startDate = start;
    }
    // end
    let retireDate = '31-12-' + moment().format('YYYY'); // end of this year as default 
    if ( end != null ) {
      retireDate = end;
    }
    // week start and end
    let weekdayStart = 1;
    let weekdayEnd = 5;
    if ( weekStart != null ) {
      switch(weekStart) {
        case 'Monday':
            weekdayStart = 1;
            break;
        case 'Tuesday':
            weekdayStart = 2;
            break;
        case 'Wednesday':
            weekdayStart = 3;
            break;
        case 'Thursday':
            weekdayStart = 4;
            break;
        case 'Friday':
            weekdayStart = 5;
            break;     
        default:
            weekdayStart = 1;
      }      
    }
    if ( weekEnd != null ) {
      switch(weekEnd) {
        case 'Tuesday':
            weekdayEnd = 2;
            break;
        case 'Wednesday':
            weekdayEnd = 3;
            break;
        case 'Thursday':
            weekdayEnd = 4;
            break;
        case 'Friday':
            weekdayEnd = 5;
            break;         
        default:
            weekdayEnd = 5;
      }   
    }

    const publicHolidays = getPublicHolidays();

    moment.fn.isBusinessDay = function() {
      // check if public holiday.
        for ( let day in publicHolidays ) {
            if ( publicHolidays[day] === this.format('DD-MM-YYYY') ) {
                return false;
            }
        }
      // check if a weekday - 0-6 is sun-sat in Moment so 1-5.
        let curDay = this.day();

        if ( curDay >= weekdayStart && curDay <= weekdayEnd ) return true; 
        return false;
    };

    moment.fn.businessDiff = function (end) {
      // get start and end dates
      let start = this;
      let daysBetween = 0;
      let totalDays = 0;
      // if days are the same, don't run
      if (start === end) {
        return daysBetween;
      }
      // loop and check if day is business or holiday
      while ( start <= end ) {
        if ( start.isBusinessDay() ) {
          daysBetween++;
        }      
        totalDays++;  
        // move forward one day
        start.add(1, 'd');
      }
      return {totalDays, daysBetween};
    };

    // fire fn
    let daysBetween = moment( startDate ,'DD-MM-YYYY').businessDiff(moment( retireDate ,'DD-MM-YYYY')).daysBetween;
    let totalDays = moment( startDate ,'DD-MM-YYYY').businessDiff(moment( retireDate ,'DD-MM-YYYY')).totalDays;

    return {totalDays, daysBetween};

}