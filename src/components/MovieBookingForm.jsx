import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApiContext } from '../context/apicontext';

const MovieBookingForm = () => {
  const { id } = useParams();
  const shows = useApiContext();
  const show = shows.find(result => result.show.id.toString() === id);

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [bookedUsers, setBookedUsers] = useState([]);

  useEffect(() => {
    // Get booked user names from local storage
    const storedUsers = Object.keys(localStorage)
      .filter(key => key.startsWith('user-'))
      .map(key => JSON.parse(localStorage.getItem(key)).name);
    setBookedUsers(storedUsers);
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    // Store user details in local storage
    localStorage.setItem(`user-${id}`, JSON.stringify({ name: userName, email: userEmail }));
    // Update bookedUsers state with new user
    setBookedUsers(prevUsers => [...prevUsers, userName]);
    // Reset form fields
    setUserName('');
    setUserEmail('');
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-booking-container">
      <h1 className="page-title">Movie Booking Form</h1>
      <h2 className="form-title">Booking for: {show.show.name}</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
      <label className="form-label">Name: </label>
        <input
          type="text"
          className="form-input"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          required
        />
        <br />
        <label className="form-label">Email: </label>
        <input
          type="email"
          className="form-input"
          value={userEmail}
          onChange={e => setUserEmail(e.target.value)}
          required
        />
        <br />
        <button type="submit" className="submit-button">
          Book Ticket
        </button>
      </form>
      <p className="form-info">
        Back to <Link to={`/show/${id}`} className="link-text">{show.show.name}</Link> details
      </p>
      {bookedUsers.length > 0 && (
        <div style={{marginTop:"30px"}} className="booked-users">
          <h3>Booked Users:</h3>
          <ul style={{display:"flex",flexDirection:"column",marginTop:"30px"}} >
            {bookedUsers.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieBookingForm;
