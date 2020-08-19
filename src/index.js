import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";

import i18n from "./i18n";

i18n.init().then(() =>
    ReactDOM.render(
        <ErrorBoundry>
            <App />
        </ErrorBoundry>,
        document.getElementById("root")
    )
);
