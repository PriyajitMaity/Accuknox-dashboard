import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/data.json";

const widgetsSlice = createSlice({
  name: "widgets",
  initialState: {
    categories: data,
  },
  reducers: {
    toggleWidgetVisibility: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      state.categories = state.categories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              widgets: cat.widgets.map((w) =>
                w.id === widgetId ? { ...w, isVisible: !w.isVisible } : w
              ),
            }
          : cat
      );
    },
    addWidget: (state, { payload }) => {
      const { categoryId, widget } = payload;

      state.categories = state.categories.map((item) =>
        item.id === categoryId
          ? { ...item, widgets: [...item.widgets, widget] }
          : item
      );
    },
    onSave: (state, { payload }) => {
      state.categories = payload;
    },
    deleteWidget: (state, { payload }) => {
      const { categoryId, widgetId } = payload;
      state.categories = state.categories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              widgets: cat.widgets.filter((w) => w.id !== widgetId),
            }
          : cat
      );
    },
  },
});
export const { toggleWidgetVisibility, onSave, addWidget, deleteWidget } =
  widgetsSlice.actions;
export default widgetsSlice.reducer;
