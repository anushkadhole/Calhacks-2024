import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to the Task Scheduler App!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Manage your tasks effectively with our simple and intuitive interface.
      </Typography>
      <Button variant="contained" color="primary" href="/tasks">
        View Tasks
      </Button>
    </Container>
  );
}

export default Home;
