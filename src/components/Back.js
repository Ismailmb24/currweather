import React from "react";
import PropTypes from "prop-types";
import { FaLessThan } from "react-icons/fa6";

// Function to render a back button with an icon.
export default function Back() {
  return (
    <button
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
        border: "none",
        fontSize: "30px",
        margin: "20px 0px",
      }}
      onClick={() => window.history.back()}
    >
      <FaLessThan />
    </button>
  );
}

Back.propTypes = {
  path: PropTypes.string.isRequired,
};
