import React from "react";
import PropTypes from "prop-types";
import style from "./Detail.module.css";
export default function Detail({icon, icon2, title, value, unit}) {
    return (
        <div className={style.detail}>
            <div className={style.icon_wraper}>
               {icon} {icon2}
            </div>
            <div className={style.detail_info}>
                <p className={style.title}>{title}</p>
                <p className={style.value}>{`${value} ${unit}`}</p>
            </div>
        </div>
    );
}

Detail.propTypes = {
    icon: PropTypes.object,
    icon2: PropTypes.object,
    title: PropTypes.string,
    value: PropTypes.any,
    unit: PropTypes.string
}