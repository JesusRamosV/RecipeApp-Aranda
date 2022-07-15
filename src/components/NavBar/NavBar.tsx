import { useDispatch, useSelector } from "react-redux";
import { foodTypeSelectedReducer } from "../../store/Slice/foodTypeSelectedSlice";
import { ItemsNavbar } from "./navBar.enum";

export let  Items: ItemsNavbar[] = [
  { name: "Home", queryParams: "dessert" },
  { name: "Vegetarianos", queryParams: "vegetarian" },
  { name: "Platos Principales", queryParams: "fingerfood" },
  { name: "Tortas", queryParams: "cakes" },
  { name: "Comida Rápida", queryParams: "quick"},
  { name: "Menú Niños", queryParams: ""},
  { name: "Sopa", queryParams: "soups",
  },
];
export const NavBar = () => {
  const dispatch = useDispatch();

  const foodTypeSelected = useSelector((state: any) => state.foodTypeSelected);
  const handleNewRecipes = (type: string ) => dispatch(foodTypeSelectedReducer(type));


  return (
    <>
      <div className="headform">
        <div className="header">
          <div className="title">
            <span className="text1">
              Recipe<span className="text2">App</span>
            </span>
          </div>
          <div className="menuHead">
            <ul>
              {Items.map(({ name, queryParams }, index) => (
                <li
                  key={index}
                  onClick={() => handleNewRecipes(queryParams)}
                  className={foodTypeSelected === queryParams ? "selected" : ""}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div className="icoHome"></div>
        </div>

        <div className="imgHead">
          <div className="floatText">
            <div className="text1">Recetas</div>
            <div className="text2">para todos</div>
          </div>
        </div>
      </div>
    </>
  );
};
