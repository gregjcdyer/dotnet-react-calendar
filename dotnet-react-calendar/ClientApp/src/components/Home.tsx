import React, { Component } from 'react';
import { Cell } from './Cell';
import "./Home.css";

interface IProps {

}

interface IState {
    currentWeek: Date[];
    currentMonth: string;
}

export class Home extends Component<IProps, IState> {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {currentWeek: [], currentMonth: ""};
    }

    componentDidMount() {
        this.populateWeekdays();
    }

    render () {
    return (
        <div>
        <h1>Weather Forecast</h1>
            <h3>{this.state.currentMonth}</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {this.state.currentWeek.map(day =>
                        <td><Cell day={day} /></td>
                        )}
                    </tr>
                </tbody>
            </table>
        </div>
    );
    }

    populateWeekdays(): void {
        let dates: Date[] = [];
        let date = new Date(Date.now());

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
        this.setState({
            currentWeek: dates,
            currentMonth: date.toLocaleString('default', { month: 'long' })
        });
    }
}
