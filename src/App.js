import React from 'react';
import injectContext from "./store/appContext";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TicTac from './views/Tictac';
import Home from './views/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/titactoe" component={TicTac} />
        <Route render={() => <h1>Not found!</h1>} />
      </Switch>
    </Router>
  );
}

export default injectContext(App);
