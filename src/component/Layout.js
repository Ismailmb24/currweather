import React, { useState } from "react";
import Menu from "./Menu";
import { Outlet } from "react-router";
import "../css/layout.css";
import PagesHeader from "./PagesHeader";

export default function Layout() {
  const [navStatus, setNavStatus] = useState(false);
  return (
    <main id="layout" data-testid="menu">
      <Menu
        className={navStatus ? "active" : ""}
        navStatus={navStatus}
        setNavStatus={setNavStatus}
      />
      <section id="main" className={navStatus ? "active" : ""}>
        <PagesHeader weather={27} />
        <section id="outlet">
          <Outlet />
        </section>
      </section>
    </main>
  );
}
