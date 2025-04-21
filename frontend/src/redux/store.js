// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/darkModeSlice.js";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});

export default store;
