import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useApiContext } from '../context/apicontext';

const ShowDetail = () => {
    const { id } = useParams();
    const shows = useApiContext();
    const show = shows.find(result => result.show.id.toString() === id);
    console.log(show.show.averageRuntime
        );

    if (!show) {
        return <div>Loading...</div>;
    }

    return (
        <div className="showdetails-container">
            <div className="detail-container">
                <div className="image-container">
                    <img
                        src={show.show.image ? show.show.image.medium : 'placeholder-image-url'}
                        alt={show.show.name}
                    />
                </div>
                <div className="details">
                    <h1>{show.show.name}</h1>
                    <div dangerouslySetInnerHTML={{ __html: show.show.summary }} />
                    {show.genres && <p><strong>Genre:</strong> {show.genres.join(', ')}</p>}
                    <p><strong>Runtime:</strong> {show.show.averageRuntime
                    } minutes</p>
                    <p><strong>Language:</strong> {show.show.language}</p>
                    <p>Ratings: {show.show.rating.average}</p>
                    <Link to={`/booking/${show.show.id}/${encodeURIComponent(show.show.name)}`}>Book Movie Ticket</Link>
                    <Link className='home-button' to={`/`}>Home</Link>


                </div>
            </div>
        </div>
    );
};

export default ShowDetail;
