import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import WeatherProvider from "./WeatherProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </Router>
  </React.StrictMode>,
);
