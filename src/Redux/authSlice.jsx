import { createSlice } from '@reduxjs/toolkit';
import { api } from './api';
// Initial state with type
const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
    },
    clearUser: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.token;
        state.user = payload.user;
      }
    );
  },
});

// Export actions to be used in components or middleware
const { setUser, clearUser } = authSlice.actions;
export { setUser, clearUser };

// Export the reducer to be used in the store
export default authSlice.reducer;
