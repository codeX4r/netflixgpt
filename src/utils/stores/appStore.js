import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../stores/userSlice.js";
import movieReducer from "../stores/movieSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

export default appStore;
