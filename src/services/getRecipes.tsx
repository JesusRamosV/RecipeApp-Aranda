import client from "./client";



export const getRecipes = async (type: string) => {
  const url = `/recipes/random`;
  const { data } = await client.get(url, {
    params: {
      number: 4,
      type: type,
    },
  });
  const { recipes } = data;
  console.log(recipes);
  return recipes;
};

