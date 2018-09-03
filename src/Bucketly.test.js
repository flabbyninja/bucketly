import React from 'react';
import ReactDOM from 'react-dom';
import Bucketly from './Bucketly';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Bucketly/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
