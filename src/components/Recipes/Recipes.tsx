import { DisplayHead2, CarouselInitial, DisplayMenuFinal } from "./";
import ic_vegetarian from "../../assets/icons/ic_vegetarian.svg";
import ic_main from "../../assets/icons/ic_main.svg";
import ic_cake from "../../assets/icons/ic_cake.svg";
import ic_fast_food from "../../assets/icons/ic_fast-food.svg";
import ic_kids from "../../assets/icons/ic_cake.svg";
import ic_soup from "../../assets/icons/ic_soup.svg";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getRecipes } from "../../services/getRecipes";

const tarjets = [
  {
    idnormal: "tarhead1",
    imgMenu: ic_vegetarian,
    food: "Vegetarianos",
    queryParams: "vegetarian"
  },
  {
    idnormal: "tarhead2",
    imgMenu: ic_main,
    food: "Principales",
    queryParams: "fingerfood"
  },
  {
    idnormal: "tarhead3",
    imgMenu: ic_cake,
    food: "Tortas",
    queryParams: "cakes"
  },
  {
    idnormal: "tarhead4",
    imgMenu: ic_fast_food,
    food: "Rápida",
    queryParams: "quick"
  },
  {
    idnormal: "tarhead5",
    imgMenu: ic_kids,
    food: "Menú Niños", 
    queryParams: ""
  },
  {
    idnormal: "tarhead6",
    imgMenu: ic_soup,
    food: "Sopas", queryParams: "soups"
  },
];

export function Recipes() {
 
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
      <div className="spinner">
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
              
              <CarouselInitial key={index} {...recipe} index={index} />
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
