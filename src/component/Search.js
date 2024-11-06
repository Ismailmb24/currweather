import React, { useState } from "react";
import SearchField from "./SearchField";
import "./Search.css";

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <section id="search" className="pages">
      <SearchField setSearch={setSearch} />
    </section>
  );
}
