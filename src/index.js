import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux & axios
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import axios from 'axios';
import logger from 'redux-logger';

const postFeedback = (feedback) => {
    axios.post('/api/feedback', feedback)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            alert(`There's a problem with your post`);
        })
} // end axios post for feedback

// declare feedback as a redux reducer
// add if/else if statements for each action.type
const feedback = (state = {}, action) => {
    if (action.type === 'FEELINGS_SUBMIT') {
        state.feelings = action.payload;
    } else if (action.type === 'COMPREHENSION_SUBMIT') {
        state.comprehension = action.payload;
    } else if (action.type === 'SUPPORT_SUBMIT') {
        state.support = action.payload;
    } else if (action.type === 'COMMENTS_SUBMIT_SEND') {
        state.comments = action.payload;
        postFeedback(state);
        state = {};
    }
    return state;
} // end feedback declaration

// create the redux store and apply middleware
const store = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger),
) // end reduxStore creation, combining reducers, and middleware



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
