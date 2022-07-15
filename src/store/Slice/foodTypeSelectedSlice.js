import { createSlice } from "@reduxjs/toolkit";

const initialState = "veryPopular";

export const foodTypeSelectedSlice = createSlice({
  name: "foodTypeSelected",
  initialState,
  reducers: {
    foodTypeSelectedReducer: (state, { payload }) => payload,
  },
});

export const { foodTypeSelectedReducer } = foodTypeSelectedSlice.actions;
