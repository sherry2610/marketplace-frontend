import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import uiSlice from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    appSlice,
    uiSlice,
  },
});
