import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../stores/userSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
