import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const postFeedback = (feedback) => {
    axios.post('/api/feedback', feedback)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            alert(`There's a problem with your post`);
        })
}

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
    return state = {};
}

const store = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger),
)
    
// end feedbackReducer



ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
