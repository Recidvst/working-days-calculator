// get moment
import moment from 'moment';

// export calculation fn
export function calculateWorkingDays(start, end, weekStart, weekEnd, holidays) {

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
    // public holidays
    let publicHolidays = [
        {name: 'New Years Day', date: '01-01-2018'},
        {name: 'Good Friday' , date: '30-03-2018'},
        {name: 'Easter Monday' , date: '02-04-2018'},
        {name: 'Early May Bank Holiday' , date: '07-05-2018'},
        {name: 'Spring Bank Holiday' , date: '28-05-2018'},
        {name: 'Summer Bank Holiday' , date: '27-07-2018'},
        {name: 'Christmas Day' , date: '25-12-2018'},
        {name: 'Boxing Day' , date: '26-12-2018'}
    ];
    if ( holidays != null ) {
        publicHolidays = holidays;
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

    moment.fn.isBusinessDay = function() {
      // check if public holiday.
        for ( let day in publicHolidays ) {
            if ( publicHolidays[day].date === this.format('DD-MM-YYYY') ) {
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