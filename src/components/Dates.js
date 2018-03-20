import React, { Component } from 'react';
import PropTypes from 'prop-types'

import moment from 'moment';

class Dates extends Component {

    constructor() {
        super();

        this.state = {
          inputStartDate: moment().format('YYYY-MM-DD'),
          inputEndDate: moment().endOf('year').format('YYYY-MM-DD'),
        };

        this.reflectInputChanges = this.reflectInputChanges.bind(this);
    }

    reflectInputChanges(e) {
        if (e.target.id === 'startDateInput') {
            this.setState({ 
                inputStartDate : e.target.value
            }); 
            this.props.startDateUpdate(e); 
        }
        if (e.target.id === 'endDateInput') {
            this.setState({ 
                inputEndDate : e.target.value
            });   
            this.props.endDateUpdate(e);  
        }
    }

    render() {

        return (
        <div className="dates-component">

            <div className="date-inputs-box">
                <h3> Start Date </h3>
                <input 
                    id="startDateInput" 
                    type="date" 
                    value={this.state.inputStartDate} 
                    onChange={this.reflectInputChanges} 
                />
            </div>

            <div className="date-inputs-box">
                <h3> End Date </h3>
                <input 
                    id="endDateInput" 
                    type="date" 
                    value={this.state.inputEndDate} 
                    onChange={this.reflectInputChanges} 
                />
            </div>

        </div>
        );
    }

}

Dates.propTypes = {
    inputStartDate: PropTypes.object,
    inputEndDate: PropTypes.object
};

export default Dates;
