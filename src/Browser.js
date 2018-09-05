import React, {Component} from 'react';
import BrowserEntry from './BrowserEntry';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

class Browser extends Component {
    // TODO: implement tracking of selected items at browser level. Maintain list of selected. Create utility function that can determine select status based on existence in that structure

    constructor(props) {
        super(props);
        autoBind(this);
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
