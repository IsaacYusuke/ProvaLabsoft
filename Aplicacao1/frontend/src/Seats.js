import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Button, Typography, Paper } from '@mui/material';

const Seats = () => {
  const [organizedSeats, setOrganizedSeats] = useState({});

  useEffect(() => {
    const fetchSeats = () => {
      axios.get('http://localhost:8000/seats')
        .then(response => {
          organizeSeats(response.data);
        })
        .catch(error => console.error('Error fetching seats:', error));
    };

    fetchSeats();
    const intervalId = setInterval(fetchSeats, 1000);  // Polling every 1 seconds

    return () => clearInterval(intervalId);  // Clear the interval when the component unmounts
  }, []);

  const organizeSeats = (seats) => {
    const sections = {};
    seats.forEach(seat => {
      if (!sections[seat.section_name]) {
        sections[seat.section_name] = {};
      }
      if (!sections[seat.section_name][seat.rownumber]) {
        sections[seat.section_name][seat.rownumber] = [];
      }
      sections[seat.section_name][seat.rownumber].push(seat);
    });
    setOrganizedSeats(sections);
  };

  return (
    <Grid container spacing={2} style={{ padding: 20 }}>
      {Object.entries(organizedSeats).map(([sectionName, rows]) => (
        <Grid item xs={12} key={sectionName}>
          <Typography variant="h6" gutterBottom>
            Section: {sectionName}
          </Typography>
          {Object.entries(rows).map(([rowNumber, seats]) => (
            <Paper style={{ margin: '10px 0', padding: '10px' }} key={rowNumber}>
              <Typography variant="body1" gutterBottom>
                Row: {rowNumber}
              </Typography>
              <Grid container spacing={1}>
                {seats.map((seat) => (
                  <Grid item xs={4} sm={3} md={2} key={seat.id}>
                    <Button
                      variant="contained"
                      color={seat.is_available ? 'primary' : 'secondary'}
                      disabled={!seat.is_available}
                      fullWidth
                    >
                      Seat: {seat.seat_number}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default Seats;
