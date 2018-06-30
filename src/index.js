import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'react-logger';

class Feedback{
    constructor(feeling, comprehension, support, comments){
        this.feeling = feeling,
        this.comprehension = comprehension,
        this.support = support,
        this.comments = comments
    }
}

const feedbackReducer = (state = {allFeedback: [], selected: []}, action) => {
    if(action.type === 'ADD_FEEDBACK'){
        return new Feedback(action.payload.feeling, action.payload.comprehension,
            action.payload.support, action.payload.comments);
    }
    else if (action.type === 'DELETE_FEEDBACK') {
        const feedbackToRemove = feedback = feedback._id !== action.payload;
        return {...state, selected: state.selected.filter(feedbackToRemove)};
    }
    else if (action.type === 'SHOW_ALL'){
        return  {...state, allFeedback: [...action.payload]}
    }
    return state;
}
// end feedbackReducer



ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
