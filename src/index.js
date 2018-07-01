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

// class Feedback {
//     constructor(feelings, comprehension, support, comments) {
//         this.feelings = feelings,
//         this.comprehension = comprehension,
//         this.support = support,
//         this.comments = comments
//     }
// }

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
}

const store = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger),
)

const postFeedback = (feedback) => {
    axios.post('/api/feedback', feedback)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            alert(`There's a problem with your post`);
        })
}



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
