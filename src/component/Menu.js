import React from "react";
import PageLink from "./PageLink";
import PropTypes from "prop-types";
import { FaHome, FaSearch, FaStar } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useActivePage } from "../custom/activepage";

export default function Menu({ navStatus, setNavStatus = (f) => f }) {
  const activatePage = useActivePage("home-p");
  return (
    <section id="navs" className={navStatus ? "active" : ""}>
      <section id="n-o-wraper">
        <FaBars
          id="n-opener"
          onClick={() => {
            setNavStatus((status) => !status);
          }}
        />
      </section>
      <PageLink
        setActive={activatePage}
        id={"home-p"}
        url="/"
        icon={<FaHome />}
        title="Home"
      />
      <PageLink
        setActive={activatePage}
        id={"search-p"}
        url="/search"
        icon={<FaSearch />}
        title="Search"
      />
      <PageLink
        setActive={activatePage}
        id={"tagcities-p"}
        url="/tagcities"
        icon={<FaStar />}
        title="Tag Cities"
      />
    </section>
  );
}

Menu.propTypes = {
  navStatus: PropTypes.bool.isRequired,
  setNavStatus: PropTypes.func.isRequired,
};
