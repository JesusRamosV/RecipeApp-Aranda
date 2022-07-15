import { configureStore } from "@reduxjs/toolkit";
import { newRecipesSlice } from "./Slice/newRecipesSlice";




export const store = configureStore({
    reducer: {
        newRecipes: newRecipesSlice.reducer
    }
    
    });