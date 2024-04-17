import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SeatReservations = () => {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    axios.get('http://your-api-url.com/seats')
      .then(response => {
        setSeats(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const reserveSeat = (seatId) => {
    axios.patch(`http://your-api-url.com/seats/${seatId}`, { is_available: false })
      .then(response => {
        alert('Seat reserved!');
        // Atualiza a lista de assentos após a reserva
        setSeats(seats.map(seat => seat.id === seatId ? { ...seat, is_available: false } : seat));
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      {seats.map(seat => (
        <div key={seat.id}>
          <p>{`Seat Number: ${seat.seat_number} - Available: ${seat.is_available ? 'Yes' : 'No'}`}</p>
          {seat.is_available && (
            <button onClick={() => reserveSeat(seat.id)}>Reserve</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default SeatReservations;
