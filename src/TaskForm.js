import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAddTask(taskName);  // Call the function passed as prop to add the task
      setTaskName('');  // Clear the input after adding
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Task Name"
        variant="outlined"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
        fullWidth
        style={{ marginBottom: '10px' }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;
