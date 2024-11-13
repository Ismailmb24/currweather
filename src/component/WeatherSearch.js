import React, { useState } from "react";
import SearchField from "./SearchField";
import SearchResult from "./SearchResult";

export default function WeatherSearch() {
    return (
      <>
        <SearchField />
        <SearchResult />
      </>
    );
     }