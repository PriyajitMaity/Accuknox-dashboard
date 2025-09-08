import { configureStore } from "@reduxjs/toolkit";
import widgetReducer from "./slices/widgetsSlice";

export const store = configureStore({
  reducer: {
    widgets: widgetReducer,
  },
});
