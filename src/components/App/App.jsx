import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';

function App() {

  return (
    <div className='App'>
    <Router>

      {/* <Route>
        <HomePage />
      </Route> */}

      <Route path='/1' exact>
        <Feelings />
      </Route>

      <Route path='/2' exact>
        <Understanding />
      </Route>


    </Router>


    </div>
  );
}

export default App;
