import React, { useContext, useState } from "react";
import Menu from "./Menu";
import { Outlet } from "react-router";
import "./layout.css";
import PagesHeader from "./PagesHeader";
//import { useFixHeader } from "../custom/fix-header";
import { WeatherContext } from "../WeatherProvider";
/* import ErrorFeedback from "./Error";
import AllowLoc from "./AllowLoc";
import Loading from "./Loading"; */

export default function Layout() {
  const [navStatus, setNavStatus] = useState(false);
  // const status = useFixHeader();
  const { current /*denied, errorMsg, loadingFeedback*/ } =
    useContext(WeatherContext);
  // if (false) return <AllowLoc />;
  // if (false) return <ErrorFeedback />;
  // if (false) return <Loading />;

  return (
    <main id="layout" data-testid="menu">
      <Menu
        className={navStatus ? "active" : ""}
        navStatus={navStatus}
        setNavStatus={setNavStatus}
      />
      <section id="main" className={navStatus ? "active" : ""}>
        <PagesHeader {...current} status={true} />
        <Outlet />
      </section>
    </main>
  );
}
