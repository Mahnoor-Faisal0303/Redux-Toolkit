import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // Define your reducers here
    // e.g., counter: counterReducer,
  },
});

export default store;
