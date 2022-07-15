// import axios from "axios";
// import { newRecipesReducer } from "./foodTypeSelectedSlice";

// const calificationRandom = (min,max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return (Math.floor(Math.random() * (max - min) + min)); 
// }

// const difficultyRandom = () => {
//     const difficultyArray = ['Fácil', 'Dificil']
//     let position = Math.floor(Math.random()*2);
//     return difficultyArray[position];
   
// }


// export const getNewRecipesRedux = (type) => {
// return async(dispatch) => {

//         let recipe = {};
//         let arrayRecipes = [];
//         const url = `https://api.spoonacular.com/recipes/random?apiKey=586c3ba24a4a4439b5c7e09f1e325696&number=4&tags=${encodeURI (type)}`;
//         const {data} = await axios.get(url);
//         const {recipes} = data;

//         for(let i=0; i<recipes.length; i++){
//              recipe ={
//                 idnormal: `normal${i+1}`,
//                 idhover: `hover1${i+1}`,
//                 title: recipes[i].title,
//                 readyInMinutes: recipes[i].readyInMinutes,
//                 serving: recipes[i].servings,
//                 urlimage: recipes[i].image,
//                 calification: calificationRandom(1,5),
//                 difficulty: difficultyRandom(),
//                 type: type
//             }
//             arrayRecipes[i] = recipe;
//             recipe = {};
//         }
//         dispatch(newRecipesReducer(arrayRecipes))
// }
// }

// export const getNewRecipesReacQuery = (type) => {
//     return async(dispatch) => {
    
//             let recipe = {};
//             let arrayRecipes = [];
//             const url = `https://api.spoonacular.com/recipes/random?apiKey=586c3ba24a4a4439b5c7e09f1e325696&number=4&type=${encodeURI (type)}`;
//             const {data} = await axios.get(url);
//             const {recipes} = data;
    
//             for(let i=0; i<recipes.length; i++){
//                  recipe ={
//                     idnormal: `normal${i+1}`,
//                     idhover: `hover1${i+1}`,
//                     title: recipes[i].title,
//                     readyInMinutes: recipes[i].readyInMinutes,
//                     serving: recipes[i].servings,
//                     urlimage: recipes[i].image,
//                     calification: calificationRandom(1,5),
//                     difficulty: difficultyRandom(),
//                     type: type
//                 }
//                 arrayRecipes[i] = recipe;
//                 recipe = {};
//             }
            
//             return arrayRecipes;
//     }
//     }

// // readyInMinutes
// //