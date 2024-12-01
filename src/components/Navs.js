import React from "react";
import PageLink from "./PageLink";
import logo from "./../media/logo.png";
import { Grid, Search, Star } from "react-feather";
import { useLocation } from "react-router";

export default function Navs() {
  const loc = useLocation();

  const activePage = (url) => {
    const include = !!loc.pathname.includes(url); //conver the result string to boolean

    if (include && url.length != 1) {
      return true;
    } else if (include && url === loc.pathname) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <section id="navs">
      <section id="logo-wraper">
        <img src={logo} alt="logo" id="logo" />
      </section>
      <PageLink
        setActive={activePage}
        id={"home-p"}
        url="/"
        icon={<Grid />}
        title="Home"
      />
      <PageLink
        setActive={activePage}
        id={"search-p"}
        url="/search"
        icon={<Search />}
        title="Search"
      />
      <PageLink
        setActive={activePage}
        id={"tagcities-p"}
        url="/favorite"
        icon={<Star />}
        title="Favorite"
      />
    </section>
  );
}
