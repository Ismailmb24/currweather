import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
export default function DateInfo({ time }) {
  const [recentDate, setDate] = useState("");

  useEffect(() => {
    const recentTime = time;
    const date = new Date(recentTime);
    setDate(date.toDateString());
  }),
    [time];

  return <div id="date">{recentDate}</div>;
}

DateInfo.propTypes = {
  time: PropTypes.string,
}