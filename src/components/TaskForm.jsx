import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the task name and description before adding it to the list
    if (taskName && taskDescription) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        description: taskDescription,
        completed: false,
      };
      // Add the new task to the list using the addTask prop function
      addTask(newTask);
      setTaskName('');
      setTaskDescription('');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    // Task form with input fields for task name, description, and due date
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={taskDescription}
        className='description'
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <span style={{textAlign: "left", fontSize: "15px", 
         fontWeight: "400", color: "#d2cee9"}}>Add due date</span>
       <input
        type="date"
        placeholder='Add due date'
        value={taskDate}
        onChange={(e) => setTaskDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
