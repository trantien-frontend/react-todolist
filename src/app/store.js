import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Features/Auth/userSlice';
import counterReducer from '../Features/ReduxToolkit/Counter/counterSlice';

// Step-2: Tạo ra store
const rootReducer = {
  count: counterReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
