import React, { Component } from 'react';

class HolidaySingle extends Component {

    constructor() {
        super();  
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(e) {
        this.props.removeHolidayItem(e);
    }

    render() {
        return (
            <li>
                <input 
                    type="text" 
                    value={this.props.name}
                    readOnly
                />
                <input 
                    type="text" 
                    value={this.props.date}
                    readOnly
                />
                <button type="button" id={this.props.name} className="close" onClick={this.removeItem}>&times;</button>
            </li>
        );
    }
}

export default HolidaySingle;
