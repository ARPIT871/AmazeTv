// src/contexts/ShowContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ApiContext = createContext();

export const useApiContext = ()=>useContext(ApiContext)

export const Apiprovider =({children})=>{
    const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => setShows(response.data))
      .catch(err => console.log(err));
  }, []);

  return <ApiContext.Provider value={shows}>
      {children}
  </ApiContext.Provider>
}
