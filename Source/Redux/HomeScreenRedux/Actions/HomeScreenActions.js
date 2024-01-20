import { createAsyncThunk } from "@reduxjs/toolkit";

export const homeScreenAction = createAsyncThunk("HomeScreenRedux", getData => {
    return getData;
});