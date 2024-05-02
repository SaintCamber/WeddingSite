import {configureStore} from '@reduxjs/toolkit';
import sessionReducer from './sessionReducer';

export const makeStore = () => {
  return configureStore({
    reducer: { session: sessionReducer },
  });
};
