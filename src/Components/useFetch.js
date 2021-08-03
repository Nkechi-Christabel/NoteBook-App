import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("Unable to fetch Notes");
          }
          return res.json();
        })
        .then((data) => {
          setdata(data);
          seterror(null);
          setisLoading(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setisLoading(false);
            seterror(err.message);
          }
        });
    }, 500);

    return () => abortCont.abort();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
