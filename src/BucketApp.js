import React, {Component} from 'react';
import './BucketApp.css';
import Header from './Header';
import Intro from './Intro';
import TreeBrowser from './TreeBrowser';
import FileBrowser from './FileBrowser';
import Footer from './Footer';

class BucketApp extends Component {
    render() {
        return (
            <div className="BucketApp">
                <Header/>
                <Intro/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <TreeBrowser/>
                        </div>
                        <div className="col-md-8">
                            <FileBrowser/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BucketApp;
