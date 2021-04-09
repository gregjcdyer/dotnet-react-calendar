import React, { Component } from 'react';
import { Cell } from './Cell';
import "./Home.css";

interface IProps {

}

interface IState {
    days: Date[];
    currentMonth: Date;
}

export class Home extends Component<IProps, IState> {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {days: [], currentMonth: new Date(Date.now())};
    }

    componentDidMount() {
        this.populateWeekdays();
    }

    render () {
    return (
        <div>
        <h1>Weather Forecast</h1>
            <h3>{this.state.currentMonth.toLocaleString('default', { month: 'long' })}</h3>
            <div className="grid-container">
                <div className="grid-header">Sunday</div>
                <div className="grid-header">Monday</div>
                <div className="grid-header">Tuesday</div>
                <div className="grid-header">Wednesday</div>
                <div className="grid-header">Thursday</div>
                <div className="grid-header">Friday</div>
                <div className="grid-header">Saturday</div>

                {this.state.days.map((day, index) =>
                    <div className="grid-item"><Cell day={day} /></div>
                    )}
            </div>
        </div>
    );
    }

    populateWeekdays(): void {
        let dates: Date[] = [];

        // use current month, set day to the first of that month
        // generate rest of days
        let date = new Date(Date.now());
        date.setMonth(this.state.currentMonth.getMonth());
        date.setDate(1);

        while (date.getMonth() === this.state.currentMonth.getMonth()) {

            // add days before today from Sunday
            for (let i = date.getUTCDay(); i > 0 ; i--) {
                let temp = new Date(date);
                temp.setDate(temp.getUTCDate() - i);
                dates.push(temp);
            }

            // add days after today to Saturday
            for (let i = date.getUTCDay(); i < 7; i++) {
                let temp = new Date(date);
                temp.setDate(temp.getUTCDate() + (i - date.getUTCDay()));
                dates.push(temp);
            }

            date.setDate(date.getDate() + 7);
        }


        this.setState({
            days: dates
        });
    }
}
