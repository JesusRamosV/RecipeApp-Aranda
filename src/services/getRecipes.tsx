import axios from "axios";


export  const getRecipes = async () => {
        const url = 'https://api.spoonacular.com/recipes/random?apiKey=d4fe3a9c333b44c9864f6e39c70d40d7&number=5&tags=vegetarian';
        const {data} = await axios.get(url);
        const {recipes} = data;
        return recipes;
        
      }

      export  const getRecipesCakes = async () => {
        const url = 'https://api.spoonacular.com/recipes/random?apiKey=d4fe3a9c333b44c9864f6e39c70d40d7&number=5&tags=cakes';
        const {data} = await axios.get(url);
        const {recipes} = data;
        return recipes;
        
      }