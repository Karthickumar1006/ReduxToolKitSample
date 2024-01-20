import { createSlice } from '@reduxjs/toolkit';
import { homeScreenAction } from '../Actions/HomeScreenActions';

const initialState = {
  homeScreen: [],
  error: {},
  loading: false,
};

const homeScrenSlice = createSlice({
  name: 'HomeScreen',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = {};
    },
    showLoader: (state) => {
      state.loading = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(homeScreenAction.pending, state => {
        state.loading = true;
      })
      .addCase(homeScreenAction.fulfilled, (state, action) => {
        state.homeScreen = action.payload;
        state.loading = false;
      })
      .addCase(homeScreenAction.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
  },
});
export const { clearError, showLoader } = homeScrenSlice.actions;
export default homeScrenSlice.reducer;