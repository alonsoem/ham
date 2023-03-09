import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import solarConditions from "./solarConditions.js";
import updates from "./updates.js";
import cqCall from "./cqCall.js";
import utcTime from "./utcTime.js";
import tools from "./tools.js";
import landing from "./landing.js";
import results from "./results.js";
import result from "./result.js";
import repeaters from "./repeaters";
import qso from "./qso.js";

import '../node_modules/bootstrap-css-only/css/bootstrap.css';


export default class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <Switch>
          <Route exact path="/qso" component={qso} />
            <Route path="/solarConditions" component={solarConditions} />
            <Route path="/updates" component={updates} />
            <Route path="/cqcall" component={cqCall} />
            <Route path="/utc" component={utcTime} />
            <Route path="/tools" component={tools} />
            <Route path="/result/:signal/:name/:category/:country/:province/:city" component={result} />
            <Route exact path="/results/:signal" component={results} />
            <Route exact path="/repeaters" component={repeaters} />
            <Route path="/" component={landing} />
          </Switch>
        </BrowserRouter>
      );
    }
  }