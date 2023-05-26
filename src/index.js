/**
 * External dependencies
 */
import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Internal dependencies
 */
import App from "./components/app/App.js";
import "./index.css";

/**
 * Render app
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
