import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import Store from './Global/Store';

import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Store>
        <Router>
            <App />
        </Router>
    </Store>
, document.getElementById('root'));
serviceWorker.register();
