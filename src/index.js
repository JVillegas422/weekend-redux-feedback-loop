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
    // Update after working on Commentsform
}

// Redux Store
const storeInstance = createStore(
    combineReducers({
        commentsInfo,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
