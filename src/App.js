import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './Components/Navibar';
import {Footer} from './Components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import {Main} from './Main'
import {Users} from './Users'
import {About} from './About'


function App() {

  return (
    <>
      <Router>
        <Navibar />

        <Switch>
          <Route exact path="/" component = {Main} />
          <Route exact path="/about" component = {About} />
          <Route exact path="/users" component = {Users} />
        </Switch>

      </Router>

    <Footer/>
    </>
  );
}

export default App;
