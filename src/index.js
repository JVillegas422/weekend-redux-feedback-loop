import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducers
const commentsInfo = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENTS':
            return action.payload
    }
    return state;
}

const feelings = (state = [], action) => {
    // Update after working on feelingsForm
}

// Redux Store
const storeInstance = createStore(
    combineReducers({
        commentsInfo,
        feelings,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
<Provider> 
    <App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
