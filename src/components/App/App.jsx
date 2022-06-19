import React from 'react';
import axios from 'axios';
import './App.css';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Import Components
import CommentsForm from '../CommentsForm/CommentsForm';
import FeelingForm from '../FeelingForm/FeelingForm';
import SupportForm from '../SupportForm/SupportForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route exact path='/displayComments'>
          <CommentsForm />
        </Route>

        <Route exact path='/feelings'>
          <FeelingForm />
        </Route>

        <Route exact path='/supported'>
          <SupportForm />
        </Route>

        <Route exact path='/understanding'>
          <UnderstandingForm />
        </Route>

      </Router>
    </div>
  );
}

export default App;
