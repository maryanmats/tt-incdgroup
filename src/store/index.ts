import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./homeSlice";
import characterSlice from "./characterSlice";
import locationSlice from "./locationSlice";
import episodeSlice from "./episodeSlice";

const store = configureStore({
  reducer: {
    home: homeReducer,
    character: characterSlice,
    location: locationSlice,
    episode: episodeSlice,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
