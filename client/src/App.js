import React from "react";
import Auth from "./Auth";
import Home from "./Home";
import Landing from "./Landing";
import PastPayments from "./PastPayments";
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav";

class App extends React.Component {
  
  render() {
    
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/pastpayments" component={PastPayments} />
        </Switch>
      </div>
    );
  }
}

export default App;