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
        autoBind(this);
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
                            <Browser title='Buckets' entries={this.getBuckets()}/>
                        </div>
                        <div className="col-md-8">
                            <Browser title='Objects' entries={this.getObjects()}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BucketApp;
