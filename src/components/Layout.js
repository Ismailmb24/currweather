import React from "react";
import Navs from "./Navs";
import "./Layout.css";
import Main from "./Main";
export default function Layout() {
  return (
    <main id="layout">
      <Navs />
      <Main />
    </main>
  );
}
