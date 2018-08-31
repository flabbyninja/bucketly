import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="Clock">
                <h2>{new Date().toLocaleTimeString('en-GB', {weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'})}</h2>
            </div>
        );
    }
}

export default Clock;
