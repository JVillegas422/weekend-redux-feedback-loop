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
const comments = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENTS':
            return action.payload
        case 'RESET_VALUES':
            return state = []
    }
    return state;
}

const feelings = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FEELINGS':
            return action.payload
        case 'RESET_VALUES':
            return state = []
    }
    return state;
}

const supported = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SUPPORTED':
            return action.payload
        case 'RESET_VALUES':
            return state = []
    }
    return state;
}

const understanding = (state = [], action) => {
    switch (action.type) {
        case 'ADD_UNDERSTANDING':
            return action.payload
        case 'RESET_VALUES':
            return state = []
    }
    return state;
}

// Redux Store
const store = createStore(
    combineReducers({
        comments,
        feelings,
        supported,
        understanding,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
<Provider store={store}> 
    <App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
