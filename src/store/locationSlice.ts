import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RICK_API } from "../constants/fetch";
import { Character, InitialState, Location } from "./types/homeTypes";

export const fetchLocation = createAsyncThunk("home/fetchLocation", async function (id: number) {
  const response = await axios.get(`${RICK_API}/location/${id}`);

  const data = response.data;

  return data;
});

const initialState: { loading: boolean; error: boolean; data: Location } = {
  data: {
    created: "",
    dimension: "",
    residents: [""],

    id: 0,
    name: "",
    type: "",
    url: "",
  },
  loading: false,
  error: false,
};

const locationSlice = createSlice({
  name: "location",
  initialState: initialState,

  reducers: {},
  extraReducers: {
    [fetchLocation.pending as any]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchLocation.fulfilled as any]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
    [fetchLocation.rejected as any]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default locationSlice.reducer;
