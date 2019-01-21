import React, {Component} from 'react';
import {Collapse} from 'reactstrap';
import autoBind from 'react-autobind';

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            label: 'More...'
        };
        autoBind(this);
    }

    infoClicked() {
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
                        <p>A clean, simple interface to browse the content of S3 buckets</p>
                    </Collapse>
                    <button tabIndex="0" className="btn btn-primary" onClick={this.infoClicked}>{this.state.label}</button>
                </div>
            </div>
        );
    }

}

export default Intro;
