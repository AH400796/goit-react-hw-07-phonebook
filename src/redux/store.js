import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
const persistRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
