import React from 'react';
import SeatReservations from './SeatReservations';  // Ajuste o caminho conforme necessário

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Seat Reservation System</h1>
      <SeatReservations />
    </div>
  );
}

// Estilos em objeto JavaScript
const styles = {
  container: {
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px'
  },
  header: {
    textAlign: 'center',
    margin: '20px 0'
  }
};

export default App;
