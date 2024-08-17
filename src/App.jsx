import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import LoginForm from './components/Account';
import SplashScreen from './components/SplashScreen';
import Welcome from './components/Welcome';

function App() {
  // set state for splash screen
  const [screen, setScreen] = useState("splash"); 
  const [user, setUser] = useState(() => {
    // Load user from localStorage
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [tasks, setTasks] = useState(() => {
    // Load tasks from localStorage
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    // After the splash screen, check if a user is logged in
    if (user) {
      setScreen("main"); // If user is already logged in, go directly to the main screen
    } else {
      setTimeout(() => setScreen("login"), 5000); // Show splash screen for 5 seconds, then move to login
    }
  }, [user]);

  const handleNextFromSplash = () => {
    setScreen("login"); // Move to the login screen after splash
  };

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setScreen("main"); // Move to the main screen after login
  };

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now(), // Generate a unique ID for each task
      date: task.date || new Date().toISOString().split('T')[0], // Default to today's date if not provided
    };
    setTasks([...tasks, newTask]); // Add the new task to the existing tasks
  };
  // Function to update an existing task
  const updateTask = (id, updatedTask) => {
    // Update the task in the existing tasks array
    // Map through all tasks and replace the task with the matching ID with the updatedTask
  // If the task ID matches the given ID, update it with updatedTask; otherwise, keep the original task
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  // Function to delete a task by its ID
  const deleteTask = (id) => {
    // Filter out the task with the given ID from the existing tasks array
    // If the task ID matches the given ID, remove it; otherwise, keep the original task
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id!== id));
    }
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  useEffect(() => {
    // Save tasks to localStorage whenever they change
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app container">
      {screen === "splash" && <SplashScreen onNext={handleNextFromSplash} />}
      {screen === "login" && !user && (
        <LoginForm onLogin={handleLogin} />
      )}
      {screen === "main" && user && (
        <>
          <marquee>
            <h6
              style={{
                textAlign: "center",
                fontSize: "15px",
                fontWeight: "400",
                color: "#d2cee9",
              }}
            >
              Hello! Welcome to My Todo App. What tasks would you like to add for today?
            </h6>
          </marquee>
          <Welcome user={user} />
          <h1 style={{ fontWeight: "550" }}>
            <span style={{ color: "#9280ff" }}>Add</span>Task
          </h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
        </>
      )}
    </div>
  );
}

export default App;
