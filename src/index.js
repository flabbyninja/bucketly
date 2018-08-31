import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BucketApp from './BucketApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BucketApp />, document.getElementById('root'));
registerServiceWorker();
