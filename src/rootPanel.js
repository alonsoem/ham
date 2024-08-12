import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import solarConditions from "./solarConditions.js";
import updates from "./updates.js";
import cqCall from "./cqCall.js";
import utcTime from "./utcTime.js";
import tools from "./tools.js";
import landing from "./landing.js";
import landingLive from "./landingLive.js";
import results from "./results.js";
import result from "./result.js";
import repeaters from "./repeaters";
import qso from "./qso.js";
import viewer from "./viewer.js";
import feedback from "./feedback.js";
import newMember from "./newMember.js";
import newRepeater from "./newRepeater.js";
import bandPlan from "./bandPlan.js";
import qthLocator from "./qthLocator.js";
import '../node_modules/bootstrap-css-only/css/bootstrap.css';
import news from "./news.js";
import TopMenu from "./topMenu.js";


export default class App extends React.Component {
    render() {
      return (
        
        <BrowserRouter basename="/">
          <TopMenu />
          <Switch>
            <Route exact path="/qso" component={qso} />
            <Route path="/solarConditions" component={solarConditions} />
            <Route path="/updates" component={updates} />
            <Route path="/news" component={news} />
            <Route path="/cqcall" component={cqCall} />
            <Route path="/feedback" component={feedback} />
            <Route path="/utc" component={utcTime} />
            <Route path="/tools" component={tools} />
            <Route path="/newMember" component={newMember} />
            <Route path="/newRepeater" component={newRepeater} />
            <Route path="/viewer/:title/:file" component={viewer} />
            <Route path="/result/:signal/:name/:category/:country/:province/:city" component={result} />
            <Route exact path="/results/:signal" component={results} />
            <Route exact path="/repeaters" component={repeaters} />
            <Route exact path="/bands" component={bandPlan} />
            <Route exact path="/locator" component={qthLocator} />
            <Route exact path="/" component={landing} />
            <Route exact path="/live" component={landingLive} />
            
          </Switch>
        </BrowserRouter>
      );
    }
  }