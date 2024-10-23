import React, { useContext, useState } from "react";
import Menu from "./Menu";
import { Outlet } from "react-router";
import "./Layout.css";
import PagesHeader from "./PagesHeader";
//import { useFixHeader } from "../custom/fix-header";
import { WeatherContext } from "../WeatherProvider";
/* import ErrorFeedback from "./Error";
import AllowLoc from "./AllowLoc";
import Loading from "./Loading"; */

export default function Layout() {
  // const status = useFixHeader();
  const {/*denied, errorMsg, loadingFeedback*/ } =
    useContext(WeatherContext);
    
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
