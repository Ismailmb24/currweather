import React from "react";
import { Outlet } from "react-router";
import { useWeather } from "../WeatherProvider";
import ErrorFeedback from "./Error";
import Loading from "./Loading";
import DataError from "./DataError";

export default function Main() {
  const { denied, errorMsg, loadingFeedback } = useWeather();

  if (denied) return <DataError errorData={denied} />;
  if (errorMsg) return <ErrorFeedback />;
  if (loadingFeedback) return <Loading />;

  return (
    <section className="main">
      <Outlet />
    </section>
  );
}
