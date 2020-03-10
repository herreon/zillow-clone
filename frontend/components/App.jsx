import React from "react";
import { Route, Redirect, withRouter } from 'react-router-dom';
import Modal from "./modal/modal";  
import Navbar from "./navbar/navbar";
import Home from "./home/home";
import SigninFormContainer from "./session_form/signin_form_container";
import { Switch } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div className="rootyroot">

        <Modal />
        <Navbar />


        <Switch>
            <Route exact path="/signin" component={() => <Modal modal={'signin'}/>} />
            <Route exact path="/join" component={() => <Modal modal={'join'}/>} />         
            <Route path="*" component={Home} />
            <Route exact path="/" component={Home} />
        </Switch>

    
    
    </div>

    
);

export default App;