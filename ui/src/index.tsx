import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-zb2jzg4h.us.auth0.com"
      clientId="nne0x3G94QJyU5jRVsqyOrPLzO7HpEsJ"
      redirectUri={window.location.origin}
      audience="http://localhost:8080"
      scope="read:entries write:entries"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
