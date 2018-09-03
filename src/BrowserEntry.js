import React, {Component} from 'react';

class BrowserEntry extends Component {
    handleClick(e) {
        // e.persist();
        console.log('Clicked on: %s', e.target.innerText);
    }

    render() {
        return (
            <div className={'browser-entry'} onClick={this.handleClick}>
                <span key={this.props.id}>{this.props.name}</span>
            </div>
        );
    }
};

export default BrowserEntry;
