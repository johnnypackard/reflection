import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'redux-logger';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
