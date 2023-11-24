import {configureStore} from '@reduxjs/toolkit';

import productReducer from './product';

const store = configureStore({
  reducer: {
    productReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export default store;
