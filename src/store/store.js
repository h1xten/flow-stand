import { configureStore } from "@reduxjs/toolkit";
import { standSlice } from "./standSlice/standSlice";

export const store = configureStore({
  reducer: standSlice.reducer,
})
