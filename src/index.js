/**
 * External dependencies
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

/**
 * Internal dependencies
 */
import App from "./components/app/App.js";
import store from "./store/store.js";
import "./index.css";

/**
 * Render app
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
