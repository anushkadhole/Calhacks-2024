import React, { useState } from 'react';
import { Button, TextField, Typography, List, ListItem } from '@mui/material';

const TaskScheduler = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h4">Task Scheduler</Typography>
            <TextField 
                label="Enter Task" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                style={{ margin: '20px' }} 
            />
            <Button variant="contained" color="primary" onClick={addTask}>
                Add Task
            </Button>
            <List>
                {tasks.map((task, index) => (
                    <ListItem key={index}>{task}</ListItem>
                ))}
            </List>
        </div>
    );
};

export default TaskScheduler;
