import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [loadingFeedback, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    if (!url) return;
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setErrorMsg);
  }, [url]);

  return [
    data,
    loadingFeedback,
    errorMsg,
  ];
};
