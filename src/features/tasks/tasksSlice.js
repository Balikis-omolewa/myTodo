import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const index = state.findIndex(task => task.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedTask };
      }
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;  // Assuming `completed` is the correct field.
      }
    },
  },
});

export const { addTask, updateTask, deleteTask, toggleComplete } = tasksSlice.actions;
export default tasksSlice.reducer;
