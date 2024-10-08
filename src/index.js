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
    domain="dev-iqnkpmtw00ffhwi3.us.auth0.com"
    clientId="dTtJKXJi8biICeYyslKaqJIkGYrvCa9t"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://cyber-commanders-laravel.vercel.app/rest/"
    }}
  >
    <App />
  </Auth0Provider>
);

serviceWorkerRegistration.register();

reportWebVitals();
 