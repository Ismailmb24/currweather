import React from "react";
import Layout from "./component/Layout";
import { Route, Routes } from "react-router";
import Home from "./component/Home";
import Search from "./component/Search";
import Favorite from "./component/Favorite";
import WeatherSearch from "./component/WeatherSearch";
import SearchedCityFD from "./component/SearchedCityFD";
import FavLocList from "./component/FavLocList";
import NotFound from "./component/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />}>
          <Route index element={<WeatherSearch />} />
          <Route path=":id" element={<SearchedCityFD />} />
        </Route>
        <Route path="/favorite" element={<Favorite />}>
          <Route index element={<FavLocList />} />
          <Route path=":id" element={<SearchedCityFD />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
