import React from "react";
import { PulseLoader } from "react-spinners";

export default function Loading() {
  return (
    <div
      className="loader main"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PulseLoader color="#ff4810" />
    </div>
  );
}
