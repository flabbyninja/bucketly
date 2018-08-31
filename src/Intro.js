import React, {Component} from 'react';
import Clock from './Clock';

class Intro extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div class="container">
                    <Clock/>
                    <h1>Introduction</h1>
                    <p>Scalable blah blah whatever</p>
                    <a href='#' class="btn btn-primary btn">More...</a>
                </div>
            </div>
        );
    }
}

export default Intro;
