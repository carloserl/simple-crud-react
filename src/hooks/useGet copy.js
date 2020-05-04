import { useState, useEffect } from "react";
import { getService } from '../services'

const useGet = (url) => {
    const [response, setResponse] = useState(null);
    const [error] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      console.log("fetch getService")
      const FetchData = async () => {
        setIsLoading(true)
        const res = await getService(url);
        setIsLoading(false)
        setResponse(res)
      };
      FetchData();
    }, [url]);
    return { response, error, isLoading};
  };

  export default useGet;