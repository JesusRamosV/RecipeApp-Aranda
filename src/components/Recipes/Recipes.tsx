import { CarouselInitial } from "./Carouselnitial";
import { DisplayHead2 } from "./DisplayHead2";
import ic_vegetarian from "../../assets/icons/ic_vegetarian.svg";
import ic_main from "../../assets/icons/ic_main.svg";
import ic_cake from "../../assets/icons/ic_cake.svg";
import ic_fast_food from "../../assets/icons/ic_fast-food.svg";
import ic_kids from "../../assets/icons/ic_cake.svg";
import ic_soup from "../../assets/icons/ic_soup.svg";
import { DisplayMenuFinal } from "./DisplayMenuFinal";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getRecipes } from "../../services/getRecipes";
import { useEffect, useState } from "react";

const tarjets = [
  {
    idnormal: "tarhead1",
    imgMenu: ic_vegetarian,
    food: "Vegetarianos",
    name: "Vegetarianos", queryParams: "vegetarian"
  },
  {
    idnormal: "tarhead2",
    imgMenu: ic_main,
    food: "Principales",
    name: "Platos Principales", queryParams: "fingerfood"
  },
  {
    idnormal: "tarhead3",
    imgMenu: ic_cake,
    food: "Tortas",
    name: "Tortas", queryParams: "cakes"
  },
  {
    idnormal: "tarhead4",
    imgMenu: ic_fast_food,
    food: "Rápida",
    name: "Comida Rápida", queryParams: "quick"
  },
  {
    idnormal: "tarhead5",
    imgMenu: ic_kids,
    food: "Menú Niños",
    name: "Menú Niños", queryParams: ""
  },
  {
    idnormal: "tarhead6",
    imgMenu: ic_soup,
    food: "Sopas",
    name: "Sopa", queryParams: "soups"
  },
];

export function Recipes() {

  const [state, setState] = useState(0)  
  const foodTypeSelected = useSelector((state: any) => state.foodTypeSelected);
  const {
    data: recipes,
    isLoading,
    isFetching,
  } = useQuery([foodTypeSelected], () => getRecipes(foodTypeSelected), {
    refetchOnWindowFocus: false,
  });

 

  if (isLoading || isFetching) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <div id="menuHead2" className="menuHeads">
        {tarjets.map((tarjet2, i) => (
          <DisplayHead2 key={i} {...tarjet2} />
        ))}
      </div>
      <div className="middle">
        <div className="middleTitle">Nuevas Recetas</div>
        <div className="contCarrusel">
          <ul id="carruselini" className="carrusel">
            {recipes.map((recipe:any, index:any) => (
              
              <CarouselInitial key={index} {...recipe} />
            ))}
          </ul>
          <ul id="carruselfin" className="carrusel">
            {recipes.map((recipe:any, i:any) => (
              <DisplayMenuFinal key={i} {...recipe} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
