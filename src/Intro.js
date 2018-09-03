import React, {Component} from 'react';
import {Collapse} from 'reactstrap';

class Intro extends Component {
    constructor(props) {
        super(props);
        this.infoClicked = this.infoClicked.bind(this);

        this.state = {
            collapse: false,
            label: 'More...'
        };
    }

    infoClicked() {
        console.log('test value');
        let targetLabel = 'More...';
        if (this.state.label === 'More...') {
            targetLabel = 'Less...';
        }
        this.setState({collapse: !this.state.collapse, label: targetLabel});
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <h1>Bucketly</h1>
                    <Collapse isOpen={this.state.collapse}>
                         A clean, simple interface to browse the content of S3 buckets
                    </Collapse>
                    <a tabIndex="0" className="btn btn-primary" onClick={this.infoClicked}>{this.state.label}</a>
                </div>
            </div>
        );
    }

}

export default Intro;
