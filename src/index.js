import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bucketly from './Bucketly';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Bucketly/>, document.getElementById('root'));
registerServiceWorker();
