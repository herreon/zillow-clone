import React from "react";
import { Route, Redirect, withRouter } from 'react-router-dom';

import Navbar from "./navbar/navbar";
import Home from "./home/home";
import { Switch } from "react-router-dom";
// import SignupFormContainer from "./signup_form_container";


const App = () => (
    <div>
        <header>
            {/* <Navbar /> */}
        {/* <SignupFormContainer /> */}
        </header>
    
    
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
        
        {/* <Route path="/signin" component={LoginFormContainer} /> */}
        {/* <Route path="/join" component={SignupFormContainer} /> */}
    </div>

    
);

export default App;