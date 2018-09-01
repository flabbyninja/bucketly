import React, {Component} from 'react';
import Clock from './Clock';

class Intro extends Component {
    constructor(props) {
        super(props);
        this.testClick = this.testClick.bind(this);
    }

    testClick(e) {
        console.log('test value');
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <Clock/>
                    <h1>Bucketly</h1>
                    <p>Clean, simple interface to browse the contents of S3 buckets</p>
                    <a tabIndex="0" className="btn btn-primary btn" onClick={this.testClick}>More...</a>
                </div>
            </div>
        );
    }


}

export default Intro;
