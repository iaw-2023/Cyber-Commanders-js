import React from "react";
import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from "react-dom/client";
import "./CSS/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-3giux1m4ssv2lw1e.us.auth0.com"
    clientId="iqmV1pdDmhvdoqrKf6o5TkWh4m8KI0MB"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);

serviceWorkerRegistration.register();

reportWebVitals();
