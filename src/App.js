import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";
import Thanku from "./components/Thanku";
import PlaceOrder from "./components/PlaceOrder";
import PlaceCard from "./components/PlaceCard";

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
        <Route path="/placeOrder">
          <PlaceOrder />
        </Route>
        <Route path="/placeCard">
          <PlaceCard />
        </Route>
        <Route path="/orderPlaced">
          <Thanku />
        </Route>
        <Route component={Error404} />
      </Switch>
    </>
  );
};

export default App;
