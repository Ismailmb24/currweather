import React from "react";
import { useFetch } from "../custom/usefetch";

export default function SearchResult({location}) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=d869cb0a1c894b068be0bc7343714e93`;
    const {data: {results}} = useFetch(url);
    results.map(result => {
         
    })
}