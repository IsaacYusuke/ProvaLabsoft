import React from 'react';
import { CssBaseline, Container, Typography } from '@mui/material';
import SeatReservations from './SeatReservations';  // Ajuste o caminho conforme necessário

function App() {
  return (
    <React.Fragment>
      <CssBaseline />  // Reset CSS padrão para consistência entre navegadores
      <Container component="main" maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Seat Reservation System
        </Typography>
        <SeatReservations />
      </Container>
    </React.Fragment>
  );
}

export default App;
