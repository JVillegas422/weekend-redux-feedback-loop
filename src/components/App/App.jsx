import React from 'react';
import axios from 'axios';
import './App.css';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Import Components
import Comments from '../Comments/Comments';
import Feelings from '../Feelings/Feelings';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route exact path='/'>
          <Feelings />
        </Route>

        <Route exact path='/1'>
          <Understanding />
        </Route>

        <Route exact path='/2'>
          <Support />
        </Route>

        <Route exact path='/3'>
          <Comments />
        </Route>

        <Route exact path='/4'>
          {/* <FeedbackReview /> */}
        </Route>

      </Router>
    </div>
  );
}

export default App;
