import React, {Component} from 'react';
import './Bucketly.css';
import Header from './Header';
import Intro from './Intro';
import Browser from './Browser';
import Footer from './Footer';
import autoBind from 'react-autobind';

const NUM_BUCKETS = 10
const FILE_PER_BUCKET = 5;

class BucketApp extends Component {
    constructor(props) {
        super(props);
        this.staticData = this.createStaticData(NUM_BUCKETS, FILE_PER_BUCKET)

        this.state = {
            objects: []
        };
        autoBind(this);
    }

    createStaticData(numBuckets, filesPerBucket) {
        let results = {};
        for (let x = 0; x < numBuckets; x++) {
            let thisCycle = [];
            for (let y = 0; y < filesPerBucket; y++) {
                thisCycle.push(`b${x + 1}f${y + 1}`);
            }
            results[`bucket${x + 1}`] = thisCycle;
        }
        return results;
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
