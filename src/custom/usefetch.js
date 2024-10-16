import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [loadingFeedback, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    console.log(errorMsg);
    if (!url) return;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setErrorMsg);
  }, [url]);

  return {
    data2: data,
    loadingFeedback,
    errorMsg,
  };
};
