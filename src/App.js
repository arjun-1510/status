import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Form from "./Form";
//import Dashboard from "./Dashboard";
import HomeButton from './HomeButton';

const App = () => {
  const [loggedIn, setloggedIn] = useState(false);

  function callbackFunction(childData) {
    setloggedIn(childData);
  }

  return (
    <Router>
      <Switch>
        <Route path="/HomeButton">
          {loggedIn ? <HomeButton/> : <Redirect to="/" />}
        </Route>
        <Route path="/">
          {loggedIn ? (
            <Redirect to="/HomeButton" />
          ) : (
            <Form parentCallback={callbackFunction} />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;