import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../stores/userSlice";
import gptReducer from "../stores/gptSlice";
import { movieApi } from "../services/movieApi";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    gpt: gptReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(movieApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default appStore;