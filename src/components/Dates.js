import React, { Component } from 'react';
import PropTypes from 'prop-types'

import moment from 'moment';

class Dates extends Component {

    constructor() {
        super();

        this.state = {
          inputStartDate: moment().format('YYYY-MM-DD'),
          inputEndDate: moment().endOf('year').format('YYYY-MM-DD'),
          inputWeekStart: 'Monday',
          inputWeekEnd: 'Friday'
        };

        this.reflectDateInputChanges = this.reflectDateInputChanges.bind(this);
    }

    reflectDateInputChanges(e) {
        // start date
        if (e.target.id === 'startDateInput') {
            this.setState({ 
                inputStartDate : e.target.value
            }); 
            this.props.handleDateUpdates(e,'start'); 
        }
        // end date
        if (e.target.id === 'endDateInput') {
            this.setState({ 
                inputEndDate : e.target.value
            });   
            this.props.handleDateUpdates(e,'end'); 
        }
        // week start
        if (e.target.id === 'weekStartInput') {
            this.setState({ 
                inputWeekStart : e.target.value
            });   
            this.props.handleDateUpdates(e,'weekStart'); 
        }
        // week end
        if (e.target.id === 'weekEndInput') {
            this.setState({ 
                inputWeekEnd : e.target.value
            });   
            this.props.handleDateUpdates(e,'weekEnd'); 
        }
    }

    render() {

        return (
        <div className="dates-component">
            <hr/>

            <div className="inputs-box">
                <h3> Start Date </h3>
                <input 
                    id="startDateInput" 
                    type="date" 
                    value={this.state.inputStartDate} 
                    onChange={this.reflectDateInputChanges} 
                />
            </div>

            <div className="inputs-box">
                <h3> End Date </h3>
                <input 
                    id="endDateInput" 
                    type="date" 
                    value={this.state.inputEndDate} 
                    onChange={this.reflectDateInputChanges} 
                />
            </div>

            <br />

            <div className="inputs-box">
                <h3> Week start </h3>
                <select 
                    name="weekStartInput" 
                    id="weekStartInput"
                    value={this.state.inputWeekStart} 
                    onChange={this.reflectDateInputChanges} 
                    >
                    <option value="Monday">Monday</option> 
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                </select>
            </div>
            <div className="inputs-box">
                <h3> Week end </h3>
                <select 
                    name="weekEndInput" 
                    id="weekEndInput"
                    value={this.state.inputWeekEnd} 
                    onChange={this.reflectDateInputChanges} 
                    >
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                </select>
            </div>

        </div>
        );
    }

}

Dates.propTypes = {
    inputStartDate: PropTypes.object,
    inputEndDate: PropTypes.object,
    inputWeekStart: PropTypes.string,
    inputWeekEnd: PropTypes.string
};

export default Dates;
