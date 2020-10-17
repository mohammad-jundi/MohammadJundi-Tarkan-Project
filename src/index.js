import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { applyMiddleware, createStore, compose } from "redux";

import { Provider, useSelector } from "react-redux";

import {
    getFirebase,
    ReactReduxFirebaseProvider,
    isLoaded,
} from "react-redux-firebase";

import firebase from "firebase/app";

import firebaseConfig from "./firebaseConfig";

import { createFirestoreInstance } from "redux-firestore";

import thunk from "redux-thunk";

import allReducers from "./redux/reducers/combinedReducer";

const store = createStore(
    allReducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase })),
        // window.__REDUX_DEVTOOLS_EXTENSION__ &&
        //     window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const profileSpecificProps = {
    userProfile: "users",
    useFirestoreForProfile: true,
    enableRedirectHandling: false,
    resetBeforeLogin: false,
};

const rrfProps = {
    firebase,
    config: firebaseConfig,
    config: profileSpecificProps,
    dispatch: store.dispatch,
    createFirestoreInstance,
};

// waiting for auth ready
function AuthIsLoaded({ children }) {
    // how tf this works?
    const auth = useSelector(state => state.firebase.auth);
    if (!isLoaded(auth)) return <div>Loading Screen...</div>;
    return children;
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <AuthIsLoaded>
                    <App />
                </AuthIsLoaded>
            </ReactReduxFirebaseProvider>
        </Provider>
    </React.StrictMode>,

    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
