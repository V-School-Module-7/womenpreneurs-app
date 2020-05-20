import React from "react";
import {withUser} from './context/UserProvider';
import Auth from "./Auth";
import Home from "./Home";
import Landing from "./Landing";
import PaymentForm from "./PaymentForm";
import Global from "./components/Containers/Global";
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import SignUpTwo from "./SignUpTwo";
import SignUpForm from "./SignUpForm"
// import SignUpForm from "./SignUpForm";

class App extends React.Component {
  
  render() {
    
    return (
      <div>
        {/* injects global styles for html body */}
        <Global />
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route exact path="/auth" component={Auth} />
          <Route path="/acctsetup" component={SignUpTwo} />
          <Route path="/signup" render={(props) => (
            <Auth loggingIn={false} step={1} />
          )} />
          {/* <Route path="/acctsetup" component={SignUpTwo} /> */}
          <Route path="/paymentform" component={PaymentForm} />
        </Switch>
      </div>
    );
  }
}

export default App;