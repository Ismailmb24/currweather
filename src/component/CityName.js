import React from "react";

export default function CityName({style, icon, city}) {
    return(
        <div className={style.location}>
            <div className={style.loc_icon}>{icon}</div>
            <div className={style.loc_name}>{city}</div>
        </div>
    );
}