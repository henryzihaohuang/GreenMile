import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root';
import { login, signup, logout, receiveCurrentUser } from './actions/session';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store = configureStore();
    
    if (window.currentUser) {
        store.dispatch(receiveCurrentUser(window.currentUser))
        delete window.currentUser;
    } 

    // testing//
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.login = login;
    window.signup = signup;
    window.logout = logout;

    // testing//
    
    ReactDOM.render(<Root store={store} />, root);
});
