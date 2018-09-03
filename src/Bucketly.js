import React, {Component} from 'react';
import './Bucketly.css';
import Header from './Header';
import Intro from './Intro';
import Browser from './Browser';
import Footer from './Footer';

class BucketApp extends Component {

    constructor(props) {
        super(props);
        this.dirs = [
            'dir1',
            'dir2',
            'dir3',
            'dir4',
            'dir5'
        ];
        this.files = [
            'file1',
            'file2',
            'file3',
            'file4',
            'file5'
        ];
        this.getDirectories = this.getDirectories.bind(this);
        this.getFiles = this.getFiles.bind(this);
    }

    getDirectories() {
        return this.dirs;
    }

    getFiles() {
        return this.files;
    }

    render() {
        return (
            <div className="bucketly-app">
                <Header/>
                <Intro/>
                <div className="container" id="browser">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Directories</h3>
                            <Browser entries={this.getDirectories()}/>
                        </div>
                        <div className="col-md-8">
                            <h3>Files</h3>
                            <Browser entries={this.getFiles()}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BucketApp;
