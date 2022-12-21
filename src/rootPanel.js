import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import solarConditions from "./solarConditions.js";

import '../node_modules/bootstrap-css-only/css/bootstrap.css';


export default class App extends React.Component {
    render() {
      return (
          <div   >
        <BrowserRouter>
          <Switch>
            <Route path="/" component={solarConditions} />
          </Switch>
        </BrowserRouter>
          </div>
      );
    }
  }