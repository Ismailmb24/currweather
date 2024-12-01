import { useEffect, useState } from "react";

export const useFindCurrLoc = () => {
  const [longitude, setLong] = useState();
  const [latitude, setLat] = useState();
  const [timezone, setTimeZone] = useState();
  const [denied, setDenied] = useState();

  const setLoc = (position) => {
    setLong(position.coords.longitude);
    setLat(position.coords.latitude);
  };
  const statusSetter = (val) => {
    setDenied(val);
  };

  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimeZone(timezone);    
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setLoc, statusSetter);
    }
  }, []);

  return [
    longitude,
    latitude,
    timezone,
    denied,
  ];
};
