import React from 'react';
import { Container, Typography } from '@mui/material';

function Tasks() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Tasks
      </Typography>
      {/* Here you can map through tasks and display them */}
      <Typography variant="body1">
        No tasks available. Add some tasks to get started!
      </Typography>
    </Container>
  );
}

export default Tasks;
