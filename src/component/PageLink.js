import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function PageLink({
  id,
  url,
  icon,
  title,
  setActive = (f) => f,
}) {
  return (
    <Link
      to={url}
      id={id}
      className="page-links"
      onClick={() => {
        setActive(id);
      }}
    >
      <span className="page-icon">{icon}</span>
      <span className="page-titles">{title}</span>
    </Link>
  );
}

PageLink.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};
