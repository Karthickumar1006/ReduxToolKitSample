import {createSlice} from '@reduxjs/toolkit';
import {homeScreenAction} from '../Actions/HomeScreenActions';

const initialState = {
  homeScreen: [],
};

const homeScrenSlice = createSlice({
  name: 'HomeScreen',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(homeScreenAction.pending, state => {
        console.log('pending========>', state);
      })
      .addCase(homeScreenAction.fulfilled, (state, action) => {
        state.homeScreen = action.payload;
      })
      .addCase(homeScreenAction.rejected, state => {
        console.log('reject========>', state);
      });
  },
});
export const {} = homeScrenSlice.actions;

export default homeScrenSlice.reducer;
