
import { CarouselInitial } from "./Carouselnitial";
import { DisplayHead2 } from "./DisplayHead2";
import ic_vegetarian from '../../assets/icons/ic_vegetarian.svg'
import ic_main from '../../assets/icons/ic_main.svg'
import ic_cake from '../../assets/icons/ic_cake.svg'
import ic_fast_food from '../../assets/icons/ic_fast-food.svg'
import ic_kids from '../../assets/icons/ic_cake.svg'
import ic_soup from '../../assets/icons/ic_soup.svg'
import { DisplayMenuFinal } from "./DisplayMenuFinal";
import { useSelector } from "react-redux";
// import {} from "../../assets/icons/"




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
            {recipes?.map((recipe, i) => (
              <CarouselInitial key={i} {...recipe} />
            ))}
          </ul>
          <ul id="carruselfin" className="carrusel">
            {
              recipes?.map((recipe, i) => (
                <DisplayMenuFinal key={i} {...recipe} />
              ))
            }
          </ul>
        </div>
      </div>
    </>
  );
}
