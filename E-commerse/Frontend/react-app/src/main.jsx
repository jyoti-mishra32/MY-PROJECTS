import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import ShopContextProvider from "./Context/ShopContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <Auth0Provider
      domain="dev-46w65388kzei33xx.us.auth0.com"
      clientId="cPkFnaXmmV9M9Bni7EeESD6ZU1K9iuYI"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >

      <BrowserRouter>

        <ShopContextProvider>
          <App />
        </ShopContextProvider>

      </BrowserRouter>

    </Auth0Provider>

  </React.StrictMode>
);