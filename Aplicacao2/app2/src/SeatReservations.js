import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SeatReservations = () => {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    fetchSeats();
  }, []);

  const fetchSeats = () => {
    axios.get('http://localhost:8000/seats')
      .then(response => setSeats(response.data))
      .catch(error => console.error('Error fetching seats:', error));
  };

  const reserveSeat = (seatId) => {
    axios.patch(`http://localhost:8000/seats/${seatId}/reserve/`)
      .then(() => {
        fetchSeats();  // Re-fetch seats to update the UI
      })
      .catch(error => console.error('Error reserving seat:', error));
  };

  return (
    <div style={styles.seatsContainer}>
      {seats.map((seat) => (
        <div key={seat.id} style={styles.seat}>
          <p>Seat Number: {seat.seat_number}</p>
          <p>Row: {seat.rownumber}</p>
          {seat.section_name && <p>Section: {seat.section_name}</p>}
          <button onClick={() => reserveSeat(seat.id)} disabled={!seat.is_available}>
            {seat.is_available ? 'Reserve' : 'Unavailable'}
          </button>
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
  }
};

export default SeatReservations;
