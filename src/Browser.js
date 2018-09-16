import React, {Component} from 'react';
import BrowserEntry from './BrowserEntry';
import PropTypes from 'prop-types';

class Browser extends Component {
    // TODO: implement tracking of selected items at browser level. Maintain list of selected. Create utility function that can determine select status based on existence in that structure

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            entries: this.props.entries
        };
        this.handleClick = this.props.handleClick;
    }

    render() {
        return (
            <div className="browser">
                <div>
                    <h3>{this.state.title || ''}</h3>
                </div>
                {this.state.entries.map((name, id) => <BrowserEntry key={id} name={name} handleClick={this.handleClick}/>)}
            </div>
        );
    }
}

Browser.propTypes = {
    handleClick: PropTypes.func.isRequired,
    title: PropTypes.string,
    entries: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Browser;
