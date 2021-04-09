import React, { Component } from "react";
import "./Cell.css";

interface IProps {
    day: Date;
}

interface IState {
    isToday: boolean;
}

export class Cell extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = { isToday: false };
    }

    componentDidMount() {
        let date = new Date(Date.now());

        this.setState({ isToday: this.props.day.getUTCDate() === date.getUTCDate() });
    }

    render() {
        let content = this.state.isToday ? <b>{this.props.day.getDate()}</b> : this.props.day.getDate();
        return (
            <div>
                <div>
                    {content}
                </div>
                <div>
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