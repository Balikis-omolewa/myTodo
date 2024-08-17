import { useState } from 'react';

function TaskForm({ addTask, existingTask }) {
  // State initialization
  const [taskName, setTaskName] = useState(existingTask ? existingTask.name : '');
  const [taskDescription, setTaskDescription] = useState(existingTask ? existingTask.description : '');
  const [dueDate, setDueDate] = useState(existingTask ? existingTask.dueDate : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the task name and description before adding it to the list
    if (taskName && taskDescription && dueDate) {
      const newTask = {
        id: Date.now(), // Generate a unique ID
        name: taskName,
        description: taskDescription,
        dueDate: dueDate, // Include due date
        completed: false,
      };

      // Add the new task to the list using the addTask prop function
      addTask(newTask);

      // Reset the form fields
      setTaskName('');
      setTaskDescription('');
      setDueDate('');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
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
        className="description"
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <span style={{ textAlign: "left", fontSize: "15px", fontWeight: "400", color: "#d2cee9" }}>Add due date</span>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
