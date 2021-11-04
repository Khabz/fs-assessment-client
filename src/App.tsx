import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Global from './styles/global';
import HomePage from './pages/Home/home';

function App() {
  return (
    <>
      <Global />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
