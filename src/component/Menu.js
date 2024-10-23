import React from "react";
import PageLink from "./PageLink";
import { Home, Search, Star } from "react-feather";
import { useActivePage } from "../custom/activepage";

export default function Menu() {
  const activatePage = useActivePage("home-p");

  return (
    <section id="navs">
      <section id="logo-wraper">
        <img src="img/logo.png" alt="logo" id="logo" />
        <span id="logo-title">CurrWeather</span>
      </section>
      <PageLink
        setActive={activatePage}
        id={"home-p"}
        url="/"
        icon={<Home />}
        title="Home"
        data_attr="home"
      />
      <PageLink
        setActive={activatePage}
        id={"search-p"}
        url="/search"
        icon={<Search />}
        title="Search"
        data_attr="search"
      />
      <PageLink
        setActive={activatePage}
        id={"tagcities-p"}
        url="/tagcities"
        icon={<Star />}
        title="Tag Cities"
        data_attr="tag-cities"
      />
    </section>
  );
}
