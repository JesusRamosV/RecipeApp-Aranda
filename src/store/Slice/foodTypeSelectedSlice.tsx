import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     name: 'Home',
//     queryParams: 'dessert'
// }

export const foodTypeSelectedSlice = createSlice({
  name: "foodTypeSelected",
  initialState: {
    name: 'Home',
    queryParams: 'dessert'
},
  reducers: {
    foodTypeSelectedReducer: (state, { payload } ) =>{
        state.name = payload.name;
        state.queryParams = payload.queryParams;
    } 
  },
});

export const { foodTypeSelectedReducer } = foodTypeSelectedSlice.actions;
