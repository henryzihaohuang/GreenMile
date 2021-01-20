import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root';
import { login, signup, logout } from './actions/session';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();


    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }

    // testing//
    window.store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.login = login;
    window.signup = signup;
    window.logout = logout;

    // testing//
    
    ReactDOM.render(<Root store={store} />, root);
});
