import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SeatReservations = () => {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/seats')
      .then(response => {
        setSeats(response.data);
      })
      .catch(error => console.error('Error fetching seats:', error));
  }, []);

  return (
    <div style={styles.seatsContainer}>
      {seats.map((seat) => (
        <div key={seat.id} style={styles.seat}>
          <p>Seat Number: {seat.seat_number}</p>
          <p>Row: {seat.rownumber}</p>
          {seat.section_name && <p>Section: {seat.section_name}</p>}
          {seat.is_available ? (
            <button onClick={() => alert('Reserve Seat')}>Reserve</button>
          ) : (
            <p style={styles.unavailable}>Unavailable</p>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  seatsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  seat: {
    border: '1px solid black',
    padding: '10px',
    margin: '10px',
    width: '200px'
  },
  unavailable: {
    color: 'red'
  }
};

export default SeatReservations;
