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
        this.state = { days: [], currentMonth: new Date(Date.now()) };
        this.incrementMonth = this.incrementMonth.bind(this);
        this.decrementMonth = this.decrementMonth.bind(this);
    }

    componentDidMount(): void {
        this.populateWeekdays();
    }

    decrementMonth(): void {
        let temp = this.state.currentMonth;
        temp.setMonth(temp.getMonth() - 1);
        this.setState({ currentMonth: temp });

        this.populateWeekdays();
    }

    incrementMonth(): void {
        let temp = this.state.currentMonth;
        temp.setMonth(temp.getMonth() + 1);
        this.setState({ currentMonth: temp });

        this.populateWeekdays();
    }

    render () {
    return (
        <div key={this.state.currentMonth.getDate()}>
            <h1>Weather Forecast</h1>
            <div className="container">
            <div className="row row-cols-3">
                <div className="col month-left">
                    <h5 onClick={this.decrementMonth}> &lt; </h5>
                </div>
                <div className="col month-center">
                    <h3>{this.state.currentMonth.toLocaleString('default', { month: 'long' })}</h3>
                </div>
                <div className="col month-right">
                    <h5 onClick={this.incrementMonth}> &gt; </h5>
                </div>
            </div>
            </div>

            <div className="grid-container">
                <div className="grid-header">Sunday</div>
                <div className="grid-header">Monday</div>
                <div className="grid-header">Tuesday</div>
                <div className="grid-header">Wednesday</div>
                <div className="grid-header">Thursday</div>
                <div className="grid-header">Friday</div>
                <div className="grid-header">Saturday</div>

                {this.state.days.map((day, index) =>
                    <div className="grid-item" key={day.getTime()}><Cell day={day} month={this.state.currentMonth}/></div>
                    )}
            </div>
        </div>
    );
    }

    populateWeekdays(): void {
        let dates: Date[] = [];

        // use current month, set day to the first of that month
        // generate rest of days
        let date = new Date(this.state.currentMonth);
        date.setDate(1);

        let nextMonthFlag = false;

        while (!nextMonthFlag) {

            // add days before today from Sunday
            for (let i = date.getDay(); i > 0 ; i--) {
                let temp = new Date(date);
                temp.setDate(temp.getDate() - i);
                dates.push(temp);
            }

            // add days after today to Saturday
            for (let i = date.getDay(); i < 7; i++) {
                let temp = new Date(date);
                temp.setDate(temp.getDate() + (i - date.getDay()));
                dates.push(temp);
            }

            date.setDate(date.getDate() + 7);

            // check the first day of the next week to check if it's still in current month
            let temp = new Date(date.setDate(date.getDate() - date.getDay()));
            if (date.getMonth() !== this.state.currentMonth.getMonth() && temp.getMonth() !== this.state.currentMonth.getMonth()) {
                nextMonthFlag = true;
            }
        }

        this.setState({
            days: dates
        });
    }
}
