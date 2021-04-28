import React, { useState, useEffect } from "react";

export let URLS = {};
URLS["HOST"] = "http://localhost:8080"
URLS["ENDPOINT"] = URLS.HOST + "/api"
URLS["HELLOWORLD"] = URLS.ENDPOINT + "/hello"

export function FetchAPI(url) {
    const [data, setData] = useState(null);

    async function fetchData(){
        const response = await fetch(url);
        const body = await response.text();
        setData(body);
    }

    useEffect(() => {
      fetchData();
    }, []);
  
    return {data};
}
