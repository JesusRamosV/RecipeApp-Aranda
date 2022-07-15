// import { AnyAction } from "@reduxjs/toolkit";
// import { Dispatch } from "react";
// import { useQuery } from "react-query";
// import { getRecipes } from "../services/getRecipes";
// import { types } from "../types/types";


// export const getNewRecipes = () => {
//     return (dispatch) => {
//         const {data: recipes, isLoading} = useQuery(["posts"], getRecipes, {refetchOnWindowFocus:false});
        
//         dispatch(newRecipes(recipes, isLoading))
//     }
    


// }

// export const newRecipes = (newRecipes, isLoading) => ({
//     type: types.getNewRecipes,
//     payload: {
//         ...newRecipes,
//         isLoading
//     }
// }
// )
