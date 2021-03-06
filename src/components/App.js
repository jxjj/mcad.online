import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MagwdPage from "../pages/MagwdPage";
import HolidayPage from "../pages/HolidayPage";

import "./App.css";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MagwdPage} />
      <Route path="/magwd" component={MagwdPage} />
      <Route path="/happy-holidays-2018" component={HolidayPage} />
    </Switch>
  </Router>
);
