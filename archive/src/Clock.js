import React, {Component} from 'react';
import autoBind from 'react-autobind';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        autoBind(this);
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
            <div className="Clock" onClick={this.componentWillUnmount}>
                <h2>{new Date().toLocaleTimeString('en-GB', {weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'})}</h2>
            </div>
        );
    }
}

export default Clock;
