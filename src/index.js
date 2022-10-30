import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Import Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducer for object data to be stored
// on each page
const feedbackReducer = (
    state = { 
        feeling: 0,
        understanding: 0,
        support: 0,
        comments: ""
    }, 
    action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return {...state, feeling: action.payload };
        case 'SET_UNDERSTANDING':
            return {...state, understanding: action.payload };
        case 'SET_SUPPORT':
            return {...state, support: action.payload };
        case 'SET_COMMENTS':
            return {...state, comments: action.payload };
        case 'SET_CLEAR':
            return {
                feeling: "",
                understanding: "",
                support: "",
                comments: ""
            };
        default:
            return state;
    }
};


// Redux Store
const store = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
