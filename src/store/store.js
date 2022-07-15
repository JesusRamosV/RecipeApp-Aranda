import { configureStore } from "@reduxjs/toolkit";
import { foodTypeSelectedSlice} from "./Slice/foodTypeSelectedSlice";


export const store = configureStore({
    reducer: {
        foodTypeSelected: foodTypeSelectedSlice.reducer
    }
    
    });