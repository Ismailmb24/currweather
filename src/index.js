import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import WeatherProvider from "./WeatherProvider";
import registerSW from "./registerSW";
import CitiesProvider from "./CitiesProvider";
import FavCitiesProvider from "./FavCitiesProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <WeatherProvider>
        <CitiesProvider>
          <FavCitiesProvider>
            <App />
          </FavCitiesProvider>
        </CitiesProvider>
      </WeatherProvider>
    </Router>
  </React.StrictMode>,
);

registerSW();
