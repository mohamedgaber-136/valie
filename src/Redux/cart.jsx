import { createSlice } from '@reduxjs/toolkit';
import { api } from './api';

// Initial state with serialized date and time
const initialState = {
  item: {
    date: new Date().toISOString(),
    time: new Date().toISOString(),
  },
};

const cartSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    // Set or update item data
    setItem: (state, action) => {
      state.item = {
        ...state.item,
        ...action.payload,
      };

      // Ensure `date` remains serialized correctly
      if (action.payload.date instanceof Date) {
        state.item.date = action.payload.date.toISOString();
      }
      
      if (action.payload.time instanceof Date) {
        state.item.time = action.payload.time.toISOString();
      }
    },

    // Reset item to its initial state instead of null
    clearItem: (state) => {
      state.item = { ...initialState.item };
    },
  },

  // Handle login response and update the state
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.item = {
          ...state.item,
          ...payload.item,
        };

        // Ensure date and time remain serialized
        if (payload.item?.date instanceof Date) {
          state.item.date = payload.item.date.toISOString();
        }
        
        if (payload.item?.time instanceof Date) {
          state.item.time = payload.item.time.toISOString();
        }
      }
    );
  },
});

// Export actions
export const { setItem, clearItem } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
