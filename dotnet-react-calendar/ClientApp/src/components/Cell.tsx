import React, { Component } from "react";
import "./Cell.css";

interface IProps {
    data: ICell;
    month: Date;
}

interface IState {
    isToday: boolean;
    day: Date;
}

export interface ICell {
    date: Date;
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
}

export class Cell extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = { isToday: false, day: this.props.data.date };
    }

    componentDidUpdate(prevProps: IProps) {
        if (prevProps.data.date !== this.props.data.date) {
            this.setState({ isToday: this.isToday(), day: this.props.data.date });
        }
    }

    componentDidMount() {
        this.setState({ isToday: this.isToday() });
    }

    isToday(): boolean {
        let date = new Date(Date.now());
        date.setHours(0, 0, 0, 0);

        let temp = this.props.data.date;
        temp.setHours(0, 0, 0, 0);

        return temp.getTime() === date.getTime();
    }


    render() {
        let content = this.state.isToday ? <b>{this.props.data.date.getDate()}</b> : this.props.data.date.getDate();
        let currentMonth = this.props.data.date.getMonth() === this.props.month.getMonth() ? true : false;
        let className = currentMonth ? "current-month" : "inactive-month";

        return (
            <div key={this.props.data.date.getDate()}>
                <div className={className}>
                    {content}
                </div>
                <div className={currentMonth ? "" : "hidden"}>
                    <ul>
                        <li>Sunrise: {this.props.data.sunrise}</li>
                        <li>Sunset: {this.props.data.sunset}</li>
                        <li>Moonrise: {this.props.data.moonrise}</li>
                        <li>Moonset: {this.props.data.moonset}</li>
                    </ul>
                </div>
            </div>
        )
    }
}