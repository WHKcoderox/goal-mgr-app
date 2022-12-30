import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { persistStore , persistReducer, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './reducers/userSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: [],
};

const rootReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({ 
  reducer: persistReducer(persistConfig, rootReducer),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const persistor: Persistor = persistStore(store);
export default store;