import { configureStore } from '@reduxjs/toolkit';

import appReducer from './reducers/app';
import layoutReducer from './reducers/layout';

const store = configureStore({
  reducer: {
    app: appReducer,
    layout: layoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
