import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const newRecipesSlice = createSlice({
  name: "newRecipes",
  initialState,
  reducers: {
    newRecipesReducer: (state, { payload }) => {
      return [...payload];
    },
  },
});

export const { newRecipesReducer } = newRecipesSlice.actions;
