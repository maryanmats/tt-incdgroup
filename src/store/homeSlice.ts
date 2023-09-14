import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RICK_API } from "../constants/fetch";
import { InitialState } from "./types/homeTypes";

export const fetchRicksCharacter = createAsyncThunk("home/fetchRicksCharacter", async function (search: string) {
  const response = await axios.get(`${RICK_API}/character${search}`);

  const data = response.data;

  return data;
});

export const fetchRicksLocation = createAsyncThunk("home/fetchRicksLocation", async function (search: string) {
  const response = await axios.get(`${RICK_API}/location${search}`);

  const data = response.data;

  return data;
});

export const fetchRicksEpisodes = createAsyncThunk("home/fetchRicksEpisodes", async function (search: string) {
  const response = await axios.get(`${RICK_API}/episode${search}`);

  const data = response.data;

  return data;
});

const initialState: InitialState = {
  loading: false,
  error: false,
  currentFilter: "character",
  data: {
    characters: [],
    episodes: [],
    info: null,
    locations: [],
  },
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,

  reducers: {
    // addHome(state, action) {
    //   state.home.push({
    //     id: action.payload.text,
    //   });
    // },
  },
  extraReducers: {
    [fetchRicksCharacter.pending as any]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchRicksCharacter.fulfilled as any]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.data.info = action.payload.info;
      state.data.characters = action.payload.results;
      state.currentFilter = "character";
    },
    [fetchRicksCharacter.rejected as any]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.data.characters = [];
      state.data.info = null;
    },

    [fetchRicksLocation.pending as any]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchRicksLocation.fulfilled as any]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.data.info = action.payload.info;
      state.data.locations = action.payload.results;
      state.currentFilter = "location";
    },
    [fetchRicksLocation.rejected as any]: (state) => {
      state.loading = false;
      state.error = true;
      state.data.locations = [];
      state.data.info = null;
    },

    [fetchRicksEpisodes.pending as any]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchRicksEpisodes.fulfilled as any]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.data.info = action.payload.info;
      state.data.episodes = action.payload.results;
      state.currentFilter = "episode";
    },
    [fetchRicksEpisodes.rejected as any]: (state) => {
      state.loading = false;
      state.error = true;
      state.data.episodes = [];
      state.data.info = null;
    },
  },
});

export default homeSlice.reducer;
