import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import {useApiContext} from '../context/apicontext'

const ShowList = () => {
    const shows = useApiContext();
    

  return (
    <div className="container">
      <h1>TvAmaze</h1>
      <ul>
        {shows.map((result, index) => (
          <li key={index} className="shows-card">
            <h2>{result.show.name}</h2>
            
           <Link to={`/show/${result.show.id}`}><img src={result.show.image ? result.show.image.medium : 'data:image/jpeg;base64,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'} alt={result.show.name} /></Link> 
          
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShowList