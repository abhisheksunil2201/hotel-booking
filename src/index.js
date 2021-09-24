import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { HotelProvider } from "./context/HotelsContext";
import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HotelProvider>
        <App />
      </HotelProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
