import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RICK_API } from "../constants/fetch";
import { Character, Episode, InitialState, Location } from "./types/homeTypes";

export const fetchEpisode = createAsyncThunk("home/fetchEpisode", async function (id: number) {
  const response = await axios.get(`${RICK_API}/episode/${id}`);

  const data = response.data;

  return data;
});

const initialState: { loading: boolean; error: boolean; data: Episode } = {
  data: {
    created: "",
    air_date: "",
    characters: [""],
    episode: "",
    id: 0,
    name: "",
    url: "",
  },
  loading: false,
  error: false,
};

const episodeSlice = createSlice({
  name: "episode",
  initialState: initialState,

  reducers: {},
  extraReducers: {
    [fetchEpisode.pending as any]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchEpisode.fulfilled as any]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
    [fetchEpisode.rejected as any]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default episodeSlice.reducer;
