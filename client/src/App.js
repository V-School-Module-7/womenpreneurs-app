import React from "react";
import Auth from "./Auth";
import Home from "./Home";
import Landing from "./Landing";
import PaymentForm from "./PaymentForm";
import Global from "./components/Containers/Global";
import LinkedIn from "./LinkedIn";
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav";

class App extends React.Component {
  
  render() {
    
    return (
      <Global>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/linkedin" component={LinkedIn} />
          <Route path="/paymentform" component={PaymentForm} />
        </Switch>
      </Global>
    );
  }
}

export default App;