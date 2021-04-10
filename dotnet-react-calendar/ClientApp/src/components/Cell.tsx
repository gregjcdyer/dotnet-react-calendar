import React, { Component } from "react";
import "./Cell.css";

interface IProps {
    day: Date;
    month: Date;
}

interface IState {
    isToday: boolean;
    day: Date;
}

export class Cell extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = { isToday: false, day: this.props.day };
    }

    componentDidUpdate(prevProps: IProps) {
        if (prevProps.day !== this.props.day) {
            this.setState({ isToday: this.isToday(), day: this.props.day });
        }
    }

    componentDidMount() {
        this.setState({ isToday: this.isToday() });
    }

    isToday(): boolean {
        let date = new Date(Date.now());
        date.setHours(0, 0, 0, 0);

        let temp = this.props.day;
        temp.setHours(0, 0, 0, 0);

        return temp.getTime() === date.getTime();
    }


    render() {
        let content = this.state.isToday ? <b>{this.props.day.getDate()}</b> : this.props.day.getDate();
        let currentMonth = this.props.day.getMonth() === this.props.month.getMonth() ? true : false;
        let className = currentMonth ? "current-month" : "inactive-month";

        return (
            <div key={this.props.day.getDate()}>
                <div className={className}>
                    {content}
                </div>
                <div className={currentMonth ? "" : "hidden"}>
                    <ul>
                        <li>Sunrise: </li>
                        <li>Sunset: </li>
                        <li>Moonrise: </li>
                        <li>Moonset: </li>
                    </ul>
                </div>
            </div>
        )
    }
}