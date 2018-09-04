import React, {Component} from 'react';
import './Bucketly.css';
import Header from './Header';
import Intro from './Intro';
import Browser from './Browser';
import Footer from './Footer';

class BucketApp extends Component {
    constructor(props) {
        super(props);
        this.buckets = [
            'dir1',
            'dir2',
            'dir3',
            'dir4',
            'dir5'
        ];
        this.objects = [
            'file1',
            'file2',
            'file3',
            'file4',
            'file5'
        ];
        this.getBuckets = this.getBuckets.bind(this);
        this.getObjects = this.getObjects.bind(this);
    }

    getBuckets() {
        return this.buckets;
    }

    getObjects() {
        return this.objects;
    }

    render() {
        return (
            <div className="bucketly-app">
                <Header/>
                <Intro/>
                <div className="container" id="browser">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Buckets</h3>
                            <Browser entries={this.getBuckets()}/>
                        </div>
                        <div className="col-md-8">
                            <h3>Objects</h3>
                            <Browser entries={this.getObjects()}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BucketApp;