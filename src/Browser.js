import React, {Component} from 'react';
import BrowserEntry from './BrowserEntry';
import PropTypes from 'prop-types';

class Browser extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // e.persist();
        this.setState({selected: !this.state.selected});
        console.log('Clicked on: %s', e.target.innerText);
    }

    render() {
        return (
            <div className="browser">
                {this.props.entries.map((name, id) => <BrowserEntry key={id} name={name}/>)}
            </div>
        );
    }
}

Browser.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Browser;
