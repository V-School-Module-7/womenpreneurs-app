import React from "react";
import SignUpOne from './SignUpOne';
import SignUpTwo from './SignUpTwo';
import SignUpThree from './SignUpThree';
import SignUpFour from './SignUpFour';
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import CenteredContainer from "./components/Containers/CenteredPageContainer";

const SignUpForm = (props) => {

  // formSteps = () => {
  //   if (this.props.step === 0) {
  //     return <SignUpOne 
  //             nextStep={this.props.nextStep}
  //            />
  //   } else if (this.props.step === 1) {
  //     return <SignUpTwo 
  //             nextStep={this.props.nextStep}
  //            />
  //   } else if (this.props.step === 2) {
  //     return <SignUpThree 
  //             nextStep={this.props.nextStep}
  //            />
  //   }
  // }
  let { path, url } = useRouteMatch();
  // render() {
    // if (this.props.step === 0) {
    //   return <SignUpOne 
    //           handleLoginOrSignup={this.props.handleLoginOrSignup}
    //           nextStep={this.props.nextStep}
    //           handleChange={this.props.handleChange}
    //          />
    // } else if (this.props.step === 1) {
    //   return <SignUpTwo 
    //           nextStep={this.props.nextStep}
    //           previousStep={this.props.previousStep}
    //           handleChange={this.props.handleChange}
    //          />
    // } else if (this.props.step === 2) {
    //   return <SignUpThree 
    //           nextStep={this.props.nextStep}
    //           previousStep={this.props.previousStep}
    //           handleChange={this.props.handleChange}
    //          />
    // } else if (this.props.step === 3) {
    //   return <SignUpFour
    //            handleSubmit={this.props.handleSubmit}
    //            previousStep={this.props.previousStep}
    //            handleChange={this.props.handleChange}
    //            {...this.props}
    //          />
    // }

    console.log('path', path)

    return (
      <CenteredContainer>
        {/* <ul>
          <li>
            <Link to={`${url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul> */}
        <Switch>
          <Route exact path={path}>
            <SignUpOne {...props} />
          </Route>
          <Route path={`${path}/linkedin`}>
            <SignUpTwo {...props} />
          </Route>
          <Route path={`${path}/questionnaire`}>
            <SignUpThree {...props} />
          </Route>
          <Route path={`${path}/confirm`}>
            <SignUpFour {...props} />
          </Route>
        </Switch>
      </CenteredContainer>
    )
  // }
}


export default SignUpForm;