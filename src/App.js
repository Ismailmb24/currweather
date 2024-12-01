import React from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Search from "./components/Search";
import Favorite from "./components/Favorite";
import WeatherSearch from "./components/WeatherSearch";
import SearchedCityFD from "./components/SearchedCityFD";
import FavLocList from "./components/FavLocList";
import NotFound from "./components/NotFound";

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
