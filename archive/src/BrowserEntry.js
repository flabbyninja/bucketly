import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

class BrowserEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            name: this.props.name
        };
        this.handleParentClick = this.props.handleClick;
        autoBind(this);
    }

    handleClick() {
        // e.persist();
        this.handleParentClick(this.state.name);
    }

    render() {
        return (
            <div className={this.state.selected ? 'browser-entry-selected' : 'browser-entry'} onClick={this.handleClick}>
                <span>{this.state.name}</span>
                {this.state.selected &&
                <span className="checkmark-span"><FontAwesomeIcon className="checkmark-selected" icon={faCheck} size="xs"/></span>
                }
            </div>
        );
    }
};

BrowserEntry.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default BrowserEntry;
