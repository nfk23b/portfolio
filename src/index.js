import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";

import i18n from "./i18n";
// import store from './store';

i18n.init().then(() =>
    ReactDOM.render(
        // <Provider store={store}>
        <ErrorBoundry>
            <App />
        </ErrorBoundry>,
        // </Provider>
        document.getElementById("root")
    )
);
