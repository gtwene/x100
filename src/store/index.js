import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { persistStore } from 'redux-persist';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import reducers from './reducers';

// const store = configureStore({
//     reducer: reducers,
//     devTools: true,
//     serializableCheck: false
// });

const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  })


export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();

const persister = persistStore(store);

export { store, persister };
