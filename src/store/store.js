import { configureStore } from "@reduxjs/toolkit";
import { foodTypeSelectedReducer} from "./Slice/foodTypeSelectedSlice";


export const store = configureStore({
    reducer: {
        newRecipes: foodTypeSelectedReducer.reducer
    }
    
    });