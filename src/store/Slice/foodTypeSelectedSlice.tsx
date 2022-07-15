import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: String = "dessert";

export const foodTypeSelectedSlice = createSlice({
  name: "foodTypeSelected",
  initialState,
  reducers: {
    foodTypeSelectedReducer: (state, { payload }:PayloadAction<string> ) => payload,
  },
});

export const { foodTypeSelectedReducer } = foodTypeSelectedSlice.actions;
