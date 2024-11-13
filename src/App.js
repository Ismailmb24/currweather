import React from "react";
import Layout from "./component/Layout";
import { Route, Routes } from "react-router";
import Home from "./component/Home";
import Search from "./component/Search";
import TagCities from "./component/TagCities";
import Hi from "./HiTest";
import WeatherSearch from "./component/WeatherSearch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />}>
          <Route index element={<WeatherSearch />} />
          <Route path=":id" element={<Hi />} />
        </Route>
        <Route path="/tagcities" element={<TagCities />} />
      </Route>
    </Routes>
  );
}

export default App;
