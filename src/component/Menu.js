import React from "react";
import PageLink from "./PageLink";
import { Grid, Search, Star } from "react-feather";
import { useActivePage } from "../custom/activepage";

export default function Menu() {
  const activatePage = useActivePage("home-p");

  return (
    <section id="navs">
      <section id="logo-wraper">
        <img src="img/logo.png" alt="logo" id="logo" />
      </section>
      <PageLink
        setActive={activatePage}
        id={"home-p"}
        url="/"
        icon={<Grid />}
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
        title="Favorite"
        data_attr="tag-cities"
      />
    </section>
  );
}
