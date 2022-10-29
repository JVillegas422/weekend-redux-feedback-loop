import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Import Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// List of Reducers
const feelings = (state = [], action) => {
    switch (action.type) {
        case 'SET_FEELINGS':
            return action.payload;
        case 'RESET_STATE':
            return state = [];
    }

    return state;
}


// Redux Store
const store = createStore(
    combineReducers({
        feelings
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
<Provider>
    <App />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
