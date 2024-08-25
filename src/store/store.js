import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/users/userSlice';
import taskSlice from '../features/tasks/tasksSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    tasks: taskSlice,
  },
});
