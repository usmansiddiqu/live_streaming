// store.js
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/auth"; // Import your API
import authSlice from "../slice/auth.slice"; // Import your API
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default storage is localStorage for web
import { combineReducers } from "redux";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// Define the persist config
const persistConfig = {
  key: "root",
  storage,
};
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user"],
};

// Combine your reducers (for future expansion)
const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  auth: persistReducer(authPersistConfig, authSlice),
});

// Persist the reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with persisted reducer and middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware), // RTK Query middleware
});

// Create a persistor
export const persistor = persistStore(store);
