import { types } from "../types/types";






export const newRecipesReducer = (state={}, action) => {

    switch (action.type) {
        case types.newRecipes:
            return {
                ...state,
                recipes: {
                    ...action.payload
                }
            }
    
        default:
            return state;
    }
}