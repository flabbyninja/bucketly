import React, {Component} from 'react';
import BrowserEntry from './BrowserEntry';

class Browser extends Component {
    render() {
        return (
            <div className="browser">
                {this.props.entries.map((name, id) => <BrowserEntry key={id} name={name}/>)}
            </div>
        );
    }
}

export default Browser;
