import { createAsyncThunk } from "@reduxjs/toolkit";
import useApi from "../../../Screens/CustomHooks/useApi";

export const homeScreenAction = createAsyncThunk("HomeScreenRedux", async (getData) => {
    const result = await useApi(getData);
    return result;
});