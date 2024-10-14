import React from "react";
import { icons } from "../data/icons";

export default function Icon(code, is_day) {
    return (
        <div id="weather-icon">
            {is_day? icons[code].day : icons[code].night}
        </div>
    );
}