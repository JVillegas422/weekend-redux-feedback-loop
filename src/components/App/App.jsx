import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Completed from '../Completed/Completed';

function App() {

  return (
    <div className='App'>
    <Router>

      <Route path='/' exact>
        <HomePage />
      </Route>

      <Route path='/1' exact>
        <Feelings />
      </Route>

      <Route path='/2' exact>
        <Understanding />
      </Route>

      <Route path='/3' exact>
        <Supported />
      </Route>

      <Route path='/4' exact>
        <Comments />
      </Route>

      <Route path='/5' exact>
        <Review />
      </Route>

      <Route path='/6' exact>
        <Completed />
      </Route>

    </Router>


    </div>
  );
}

export default App;
