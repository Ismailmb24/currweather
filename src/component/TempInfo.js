import React from "react";
import Icon from "./Icon";
import { BsSuperscript } from "react-icons/bs";

export default function TempInfo({temp, weather_code, isday}) {
    return(
        <div id="basic-w-info">
            <div>{temp}<sup>o</sup></div>
            <Icon code={weather_code} isday={isday} />
        </div>
    );
}