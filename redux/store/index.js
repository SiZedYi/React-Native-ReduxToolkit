import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers';

const store = configureStore({
  reducer: {
    product: productReducer,
    // add other reducers here
  },
});

export default store;
