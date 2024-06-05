import { createSlice } from "@reduxjs/toolkit";

export const ingredientsTabsSlice = createSlice({
  name: "ingredientTabs",
  initialState: {
    activeTabIndex: null,
  },
  reducers: {
    setActiveTabIndex: (state, action) => {
      state.activeTabIndex = action.payload;
    },
  },
  selectors: {
    selectActiveTabIndex: (state) => state.activeTabIndex,
  },
});

export const ingredientsTabsActions = ingredientsTabsSlice.actions;
export const { selectActiveTabIndex } = ingredientsTabsSlice.selectors;
