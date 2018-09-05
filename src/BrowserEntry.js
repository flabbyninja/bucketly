import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

class BrowserEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
        autoBind(this);
    }

    handleClick(e) {
        // e.persist();
        this.setState({selected: !this.state.selected});
        console.log('Clicked on: %s', e.target.innerText);
    }

    render() {
        return (
            <div className={this.state.selected ? 'browser-entry-selected' : 'browser-entry'} onClick={this.handleClick}>
                <span key={this.props.id}>{this.props.name}</span>
                {this.state.selected &&
                <span className="checkmark-span"><FontAwesomeIcon className="checkmark-selected" icon={faCheck} size="xs"/></span>
                }
            </div>
        );
    }
};

BrowserEntry.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};

export default BrowserEntry;
