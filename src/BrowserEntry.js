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

    handleClick() {
        // e.persist();
        this.props.onClick(this.props.name);
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
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default BrowserEntry;
