import React, { Component } from 'react';
import moment from 'moment';

class Dates extends Component {

    constructor() {
        super();
        this.state = {
          startDate: moment().format('DD-MM-YYYY'),
          endDate: '31-12-2018'
        };

        this.changeDates = this.changeDates.bind(this);
    }
    changeDates(event) {

        if ( event.target.id === 'startDate') {
            this.setState ({
                startDate: event.target.value
            })
            this.props.startDateUpdate(event.target.value);   
        }
        if ( event.target.id === 'endDate') {
            this.setState ({
                endDate: event.target.value
            })
            this.props.endDateUpdate(event.target.value);   
        }
    }

    render() {
        return (
        <div className="dates-component">
            <h2>
            Dates
            </h2>

            <label>
                Start Date:
                <br />
                <input 
                    type="text" 
                    id="startDate"
                    value={this.state.startDate} 
                    onChange={this.changeDates}
                />
            </label>          

            <label>
                Retirement Date:
                <br />
                <input 
                    type="text" 
                    id="endDate"
                    value={this.state.endDate} 
                    onChange={this.changeDates}
                />
            </label>

        </div>
        );
    }

}

export default Dates;
