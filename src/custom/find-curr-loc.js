import { useEffect, useState } from "react";

export const useFindCurrLoc = () => {
  const [longitude, setLong] = useState();
  const [latitude, setLat] = useState();
  const [denied, setDenied] = useState();

  const setLoc = (position) => {
    setLong(position.coords.longitude);
    setLat(position.coords.latitude);
  };
  const statusSetter = (val) => {
    setDenied(val);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setLoc, statusSetter);
      console.log("finding location");
    }
  }, []);

  return {
    longitude,
    latitude,
    denied,
  };
};
