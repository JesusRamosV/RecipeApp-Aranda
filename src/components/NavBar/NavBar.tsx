import { useDispatch, useSelector } from "react-redux";
import { foodTypeSelectedReducer } from "../../store/Slice/foodTypeSelectedSlice";
import { ItemsNavbar } from "./navBar.enum";
// import "./Navbar.scss";

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

  const {queryParams} = useSelector((state: any) => state.foodTypeSelected);
  const handleNewRecipes = (item:any) => dispatch(foodTypeSelectedReducer(item));


  return (
    <>
      <div className="icoHome">
        <div className="header">
          <div className="title">
            <span className="text1">
              Recipe<span className="text2">App</span>
            </span>
          </div>
          <div className="menuHead">
          <div className="test"> hola</div>
            <ul>
              {Items.map((item , index) => (
                <li
                  key={index}
                  onClick={() => handleNewRecipes(item)}
                  className={queryParams === item.queryParams ? "selected" : ""}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div onClick={() => handleNewRecipes(Items[0])} className="icoHome"></div>
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
