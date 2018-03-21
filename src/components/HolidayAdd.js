import React, { Component } from 'react';
import moment from 'moment';

class HolidayAdd extends Component {

    constructor() {
        super();  

        this.state = {
            newText: 'New Holiday',
            newDate: moment().format('YYYY-MM-DD')
        };

        this.addItem = this.addItem.bind(this);
        this.updateItems = this.updateItems.bind(this);
    }

    updateItems(e) {
        if ( e.target.id === 'holidayEntryAddName' ) {
            this.setState({
                newText: e.target.value
            })
        }
        if ( e.target.id === 'holidayEntryAddDate' ) {
            this.setState({
                newDate: moment(e.target.value).format('YYYY-MM-DD')
            })
        }
    }
    addItem(e) {
        let newItem = {
            name: this.state.newText,
            date: moment(this.state.newDate).format('DD-MM-YYYY')
        }
        this.props.addHolidayItem(e, newItem);
    }

    render() {
        return (

            <div className="holiday-add">
                <h4>Add a new public holiday</h4>
                <ul>
                    <li>
                        <input 
                            type="text" 
                            id="holidayEntryAddName"
                            value={this.state.newText}
                            onChange={this.updateItems}
                        />
                        <input 
                            type="date" 
                            id="holidayEntryAddDate"
                            value={this.state.newDate}
                            onChange={this.updateItems}
                        />
                        <button 
                            type="button" 
                            id="holidayEntryAddButton" 
                            className="add" 
                            onClick={this.addItem}
                        >
                        +
                        </button>
                    </li>
                </ul>
            </div>

        );
    }
}


export default HolidayAdd;
