import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Button } from '@mui/material';

const Seats = () => {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/seats')
      .then(response => {
        setSeats(response.data);
      })
      .catch(error => console.error('Error fetching seats:', error));
  }, []);

  return (
    <Grid container spacing={2}>
      {seats.map((seat) => (
        <Grid item key={seat.id} xs={2}>
          <Button
            variant="contained"
            color={seat.is_available ? 'primary' : 'secondary'}
            disabled={!seat.is_available}
          >
            {`Seat ${seat.seat_number}`}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Seats;
