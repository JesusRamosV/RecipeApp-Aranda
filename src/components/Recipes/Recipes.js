import axios from "axios";
import { useEffect } from "react";
import { CarouselInitial } from "./Carouselnitial";
import { DisplayHead2 } from "./DisplayHead2";
import ic_vegetarian from '../../assets/icons/ic_vegetarian.svg'
import ic_main from '../../assets/icons/ic_main.svg'
import ic_cake from '../../assets/icons/ic_cake.svg'
import ic_fast_food from '../../assets/icons/ic_fast-food.svg'
import ic_kids from '../../assets/icons/ic_cake.svg'
import ic_soup from '../../assets/icons/ic_soup.svg'
import { DisplayMenuFinal } from "./DisplayMenuFinal";
import { useQuery, useQueryClient } from "react-query";
import { getRecipes, getRecipesCakes } from "../../services/getRecipes";
import { useSelector } from "react-redux";
// import {} from "../../assets/icons/"


const tarjets = [
  {
    idnormal: "normal1",
    idhover: "hover1",
    imgPlate: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    food: "Ojingeo",
    foodDesc: "Muchim",
    calification: "5.0",
  },
  {
    idnormal: "normal2",
    idhover: "hover2",
    imgPlate: "./assets/Ojingeo-muchim.png",
    food: "Cola",
    foodDesc: "Chicken",
    calification: "5.0",
  },
  {
    idnormal: "normal3",
    idhover: "hover3",
    imgPlate: "./assets/Ojingeo-muchim-1.png",
    food: "Roasted",
    foodDesc: "Carrot",
    calification: "4.5",
  },
  {
    idnormal: "normal4",
    idhover: "hover4",
    imgPlate: "./assets/cherry.png",
    food: "Sweet",
    foodDesc: "Cherries",
    calification: "4.0",
  },
];

const tarjets2 = [
  {
    idnormal: "tarhead1",
    imgMenu: ic_vegetarian,
    food: "Vegetarianos",
  },
  {
    idnormal: "tarhead2",
    imgMenu: ic_main,
    food: "Principales",
  },
  {
    idnormal: "tarhead3",
    imgMenu: ic_cake,
    food: "Tortas",
  },
  {
    idnormal: "tarhead4",
    imgMenu: ic_fast_food,
    food: "Rápida",
  },
  {
    idnormal: "tarhead5",
    imgMenu: ic_kids,
    food: "Menú Niños",
  },
  {
    idnormal: "tarhead6",
    imgMenu: ic_soup,
    food: "Sopas",
  },
];

export function Recipes() {

  // const {data: recipes, error, isLoading} = useQuery(["posts"], getRecipes, {refetchOnWindowFocus:false});

  // console.log(recipes);

  // if(isLoading){
  //   return (
  //     <div>
  //       <h1>Hola Mundo</h1>
  //     </div>
  //   )
  // }
  
  const recipes = useSelector( (state) => state.newRecipes)

  
  const queryClient = useQueryClient()

  console.log(queryClient);
  
  return (
    <>
      <div id="menuHead2" className="menuHeads">
          {
            tarjets2.map( (tarjet2, i) => 
                <DisplayHead2 key={i} {...tarjet2} />
            )
          }
      </div>
      <div className="middle">
        <div className="middleTitle">Nuevas Recetas</div>
        <div className="contCarrusel">
          <ul id="carruselini" className="carrusel">
            {recipes.map((recipe, i) => (
              <CarouselInitial key={i} {...recipe} />
            ))}
          </ul>
          <ul id="carruselfin" className="carrusel">
            {
              recipes.map((recipe, i) => (
                <DisplayMenuFinal key={i} {...recipe} />
              ))
            }
          </ul>
        </div>
      </div>
    </>
  );
}
