import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { store } from './app/store'
import { Provider } from 'react-redux'

// INTERNAL IMPORT
import App from "./App.jsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(

  <Provider store={store}>
    <Auth0Provider
      domain="dev-zhmkd72dknv2zilo.us.auth0.com"
      clientId="WZTwAtIrsIUCDOSNVPcIZxy5dh3W6fjA"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </Provider>
);
