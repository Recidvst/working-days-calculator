import React, { Component } from 'react';
import PropTypes from 'prop-types'

import moment from 'moment';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

    // allowing for months and years controls
    const currentYear = new Date().getFullYear();
    const fromMonth = new Date(currentYear, 0);
    const toMonth = new Date(currentYear, 11, 31);

    function YearMonthForm({ date, localeUtils, onChange }) {
        const months = localeUtils.getMonths();
        const years = [];
        for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
            years.push(i);
        }

        const handleChange = function handleChange(e) {
            const { year, month } = e.target.form;
            onChange(new Date(year.value, month.value));
        };

        return (
            <form className="DayPicker-Caption">
            <select name="month" onChange={handleChange} value={date.getMonth()}>
                {months.map((month, i) => (
                <option key={month} value={i}>
                    {month}
                </option>
                ))}
            </select>
            <select name="year" onChange={handleChange} value={date.getFullYear()}>
                {years.map(year => (
                <option key={year} value={year}>
                    {year}
                </option>
                ))}
            </select>
            </form>
        );
    }


class Dates extends Component {

    constructor() {
        super();
        this.state = {
          startDate: moment().format('DD-MM-YYYY'),
          endDate: moment().endOf('year').format('DD-MM-YYYY'),
          selectedStartDate: new Date(),
          selectedEndDate: toMonth,
          startMonth: fromMonth,
          endMonth: toMonth
        };
        this.changeStartDate = this.changeStartDate.bind(this);
        this.changeEndDate = this.changeEndDate.bind(this);
        this.handleYearMonthChange = this.handleYearMonthChange.bind(this);
    }
    changeStartDate(day, { selected }) {
        let dayFormatted = moment(day).format('DD-MM-YYYY');
        this.setState({ 
            selectedStartDate: selected ? undefined : day,
            startDate : selected ? undefined : dayFormatted
        });
        this.props.startDateUpdate(dayFormatted); 
    }
    changeEndDate(day, { selected }) {
        let dayFormatted = moment(day).format('DD-MM-YYYY');
        this.setState({ 
            selectedEndDate: selected ? undefined : day,
            startDate : selected ? undefined : dayFormatted
        });
        this.props.endDateUpdate(dayFormatted);      
    }
    handleYearMonthChange(month) {
      this.setState({ month });
    }

    render() {

        return (
        <div className="dates-component">

            <h3> Start Date </h3>
            <div className="YearNavigation">
                <DayPicker
                    selectedDays={this.state.selectedStartDate}
                    onDayClick={this.changeStartDate}
                    month={new Date()}
                    fromMonth={fromMonth}
                    toMonth={toMonth}
                    captionElement={({ date, localeUtils }) => (
                        <YearMonthForm
                        date={date}
                        localeUtils={localeUtils}
                        onChange={this.handleYearMonthChange}
                        />
                    )}
                />
            </div>

            <h3> End Date </h3>
            <div className="YearNavigation">
                <DayPicker
                    selectedDays={this.state.selectedEndDate}
                    onDayClick={this.changeEndDate}
                    month={toMonth}
                    fromMonth={fromMonth}
                    toMonth={toMonth}
                    captionElement={({ date, localeUtils }) => (
                        <YearMonthForm
                        date={date}
                        localeUtils={localeUtils}
                        onChange={this.handleYearMonthChange}
                        />
                    )}
                />
            </div>

        </div>
        );
    }

}

Dates.propTypes = {
    startDate: PropTypes.object,
    endDate: PropTypes.object,
    selectedStartDate: PropTypes.object,
    selectedEndDate: PropTypes.object,
    startMonth: PropTypes.object,
    endMonth: PropTypes.object
};

export default Dates;
