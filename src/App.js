import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route component={Error404} />
      </Switch>
    </>
  );
};

export default App;
