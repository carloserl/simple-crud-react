import { useState, useEffect } from "react";

const useGet = (url) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const FetchData = async () => {
        try {
          const res = await fetch(url, {});
          const json = await res.json();
          setResponse(json);
        } catch (error) {
          setError(error);
        }
      };
      FetchData();
    }, [url]);
    return { response, error };
  };

  export default useGet;