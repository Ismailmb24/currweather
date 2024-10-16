import React from "react";
import Layout from "./component/Layout";
import { Route, Routes } from "react-router";
import Home from "./component/Home";
import Search from "./component/Search";
import TagCities from "./component/TagCities";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/tagcities" element={<TagCities />} />
      </Route>
    </Routes>
  );
}

export default App;
