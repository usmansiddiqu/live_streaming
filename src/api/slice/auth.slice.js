// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for auth
const initialState = {
  token: null, // Store the token
  user: null, // Store user info if needed
};

// Create the slice for auth
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
      state.user = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // trial removed
  },
});

// Export actions
export const { setToken, clearToken, setUser } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
