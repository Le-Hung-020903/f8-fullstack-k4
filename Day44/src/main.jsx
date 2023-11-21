import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-c53i2bxjkccbsocz.us.auth0.com"
            clientId="l2NEQjTpLOpRFUvCjduCxfRzxDEnd3b4"
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <App />
            <Toaster />
        </Auth0Provider>
    </React.StrictMode>
);
