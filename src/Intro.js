import React, {Component} from 'react';
import Clock from './Clock';

class Intro extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div class="container">
                    <Clock/>
                    <h1>Bucketly</h1>
                    <p>Browse the contents of S3 buckets easily</p>
                    <a tabindex="0" class="btn btn-primary btn">More...</a>
                </div>
            </div>
        );
    }
}

export default Intro;
