import React, { useState } from "react";
import "./Search.css";
import { Outlet } from "react-router";

export default function Search() {
  return (
    <section id="search" className="pages">
      <Outlet />
    </section>
  );
}
