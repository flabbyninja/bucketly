import React, {Component} from 'react';
import './Bucketly.css';
import Header from './Header';
import Intro from './Intro';
import Browser from './Browser';
import Footer from './Footer';
import autoBind from 'react-autobind';

class BucketApp extends Component {
    constructor(props) {
        super(props);
        this.staticData = {
            'bucket1': ['b1f1', 'b1f2', 'b1f3', 'b1f4', 'b1f5', 'b1f6'],
            'bucket2': ['b2f1', 'b2f2', 'b2f3', 'b2f4', 'b2f5', 'b2f6'],
            'bucket3': ['b3f1', 'b3f2', 'b3f3', 'b3f4', 'b3f5', 'b3f6'],
            'bucket4': ['b4f1', 'b4f2', 'b4f3', 'b4f4', 'b4f5', 'b4f6'],
            'bucket5': ['b5f1', 'b5f2', 'b5f3', 'b5f4', 'b5f5', 'b5f6']
        };
        this.state = {
            objects: []
        };
        autoBind(this);
    }

    getBuckets() {
        return Object.keys(this.staticData);
    }

    handleBucketClick(value) {
        // e.persist();
        console.log('Clicked on bucket: %s', value);
        this.setState({objects: this.staticData[value]});
    }

    handleObjectClick(value) {
        // e.persist();
        console.log('Clicked on object: %s', value);
    }

    render() {
        return (
            <div className="bucketly-app">
                <Header/>
                <Intro/>
                <div className="container" id="browser">
                    <div className="row">
                        <div className="col-md-4">
                            <Browser title='Buckets' entries={this.getBuckets()} handleClick={this.handleBucketClick}/>
                        </div>
                        <div className="col-md-8">
                            <Browser title='Objects' entries={this.state.objects} handleClick={this.handleObjectClick}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BucketApp;
