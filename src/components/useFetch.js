import React, { useState,useEffect } from "react";

function useFetch(url, defaultResponse) {
    const [data, setData] = useState(defaultResponse);
  
    async function getDataFromAPI() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData({
          isLoading: false,
          data
        });
      } catch (e) {
        console.error(e);
        setData({
          isLoading: false,
          data: e
        });
      }
    }
  
    useEffect(() => {
      getDataFromAPI()
    }, []);
  
    return data;
  }
  export default useFetch;