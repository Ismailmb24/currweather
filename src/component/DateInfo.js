import React from "react";
import PropTypes from "prop-types";
import { useReadableTime } from "../custom/useReadableTime";

export default function DateInfo({ style, time }) {
  const {day_name, month_name, date_no } = useReadableTime(time);

  return <div className={style.date_info}>{
    `${day_name} ${month_name} ${date_no}`
  }</div>;
}

DateInfo.propTypes = {
  time: PropTypes.string,
  style: PropTypes.object,
}