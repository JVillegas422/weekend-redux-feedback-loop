import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Import Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducer for user input data
const feedbackReducer = (
    state = { 
        feeling: 0,
        understanding: 0,
    }, 
    action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return {...state, feeling: action.payload };
        case 'SET_UNDERSTANDING':
            return {...state, understanding: action.payload };
        default:
            return state;
    }
}


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
