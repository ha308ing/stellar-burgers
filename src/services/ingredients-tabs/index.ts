import { createSlice } from "@reduxjs/toolkit";

interface IIngredientsTabsState {
  activeTabIndex: number | null;
}

const initialState: IIngredientsTabsState = {
  activeTabIndex: null,
};

export const ingredientsTabsSlice = createSlice({
  name: "ingredientTabs",
  initialState,
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
