import React from "react";
import { Outlet } from "react-router";

export default function Favorite() {
  return (
    <section id="favorite" className="pages">
      <Outlet />
    </section>
  );
}
