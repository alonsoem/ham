import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import solarConditions from "./solarConditions.js";
import updates from "./updates.js";
import cqCall from "./cqCall.js";
import utcTime from "./utcTime.js";
import tools from "./tools.js";
import front from "./front.js";
import results from "./results.js";

import '../node_modules/bootstrap-css-only/css/bootstrap.css';


export default class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/solarConditions" component={solarConditions} />
            <Route path="/updates" component={updates} />
            <Route path="/cqcall" component={cqCall} />
            <Route path="/utc" component={utcTime} />
            <Route path="/tools" component={tools} />
            <Route path="/results" component={results} />
            <Route path="/" component={front} />
          </Switch>
        </BrowserRouter>
      );
    }
  }