import React, {Component} from 'react';
import './BucketApp.css';
import Header from './Header';
import Intro from './Intro';
import FileBrowser from './FileBrowser';
import Footer from './Footer';

class BucketApp extends Component {
    render() {
        return (
            <div className="BucketApp">
                <Header/>
                <Intro/>
                <FileBrowser/>
                <Footer/>
            </div>
        );
    }
}

export default BucketApp;
