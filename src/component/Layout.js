import React from "react";
import Menu from "./Menu";
import { Outlet } from "react-router";
import "./Layout.css";
//import { WeatherContext } from "../WeatherProvider";
/* import ErrorFeedback from "./Error";
import AllowLoc from "./AllowLoc";
import Loading from "./Loading"; */

export default function Layout() {
  /*const {denied, errorMsg, loadingFeedback } =
    useContext(WeatherContext);*/
    
  // if (false) return <AllowLoc />;
  // if (false) return <ErrorFeedback />;
  // if (false) return <Loading />;

  return (
    <main id="layout">
      <Menu />
      <section id="main">
        <Outlet />
      </section>
    </main>
  );
}
