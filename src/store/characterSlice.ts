import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RICK_API } from "../constants/fetch";
import { Character, InitialState } from "./types/homeTypes";

export const fetchCharacter = createAsyncThunk("home/fetchCharacter", async function (id: number) {
  const response = await axios.get(`${RICK_API}/character/${id}`);

  const data = response.data;

  return data;
});

const initialState: { loading: boolean; error: boolean; data: Character } = {
  data: {
    created: "",
    episode: [""],
    gender: "",
    id: 0,
    image: "",
    location: { name: "", url: "" },
    name: "",
    origin: { name: "", url: "" },
    species: "",
    status: "",
    type: "",
    url: "",
  },
  loading: false,
  error: false,
};

const characterSlice = createSlice({
  name: "character",
  initialState: initialState,

  reducers: {},
  extraReducers: {
    [fetchCharacter.pending as any]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchCharacter.fulfilled as any]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
    [fetchCharacter.rejected as any]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default characterSlice.reducer;
