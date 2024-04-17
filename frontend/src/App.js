import React from 'react';
import Seats from './Seats';
import { CssBaseline, Container } from '@mui/material';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <h1>Stadium Seating Availability</h1>
        <Seats />
      </Container>
    </React.Fragment>
  );
}

export default App;
