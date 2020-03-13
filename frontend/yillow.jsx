import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from "./components/root";

import * as SessionApiUtil from './util/session_api_util';
import * as PropertyApiUtil from './util/property_api_util';
import { fetchProperties, fetchProperty } from './actions/property_actions';

document.addEventListener("DOMContentLoaded", () => {

    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);

    
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.fetchProperties = fetchProperties;
    window.fetchProperty = fetchProperty;
    
    // window.fetchProperties = PropertyApiUtil.fetchProperties;
    // window.fetchProperty = PropertyApiUtil.fetchProperty;
    // window.createProperty = PropertyApiUtil.createProperty;

    // window.signup = SessionApiUtil.signup;
    // window.login = SessionApiUtil.login;
    // window.logout = SessionApiUtil.logout;

    // const store = configureStore();

    
});
