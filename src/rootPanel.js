import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import solarConditions from "./solarConditions.js";
import updates from "./updates.js";
import cqCall from "./cqCall.js";
import utcTime from "./utcTime.js";
import tools from "./tools.js";

import '../node_modules/bootstrap-css-only/css/bootstrap.css';


export default class App extends React.Component {
    render() {
      return (
          <div   >
        <BrowserRouter>
          <Switch>
            <Route path="/solarConditions" component={solarConditions} />
            <Route path="/updates" component={updates} />
            <Route path="/cqcall" component={cqCall} />
            <Route path="/utc" component={utcTime} />
            <Route path="/" component={tools} />
            <Route path="/tools" component={tools} />
          </Switch>
        </BrowserRouter>
          </div>
      );
    }
  }