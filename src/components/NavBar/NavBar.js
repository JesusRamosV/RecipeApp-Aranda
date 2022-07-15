import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { getNewRecipesReacQuery, getNewRecipesRedux } from "../../store/Slice/thunks";




export function NavBar() {

  const dispatch = useDispatch();

  useEffect(() => {
    handleNewRecipes('dessert');
  }, [])
  
  const handleNewRecipes = (type) => {
  
   dispatch(getNewRecipesRedux(type));
  }


  const {data: mainCourse} = useQuery('[MainCourse]', getNewRecipesReacQuery('maincourse'));

  console.log(mainCourse);





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
              <li onClick={() => handleNewRecipes('veryPopular')} className="selected">Home</li>
              <li onClick={() => handleNewRecipes('vegetarian')}>Vegetarianos</li>
              <li>Platos Principales</li>
              <li onClick={() => handleNewRecipes('cakes')}>Tortas</li>
              <li>Comida R&aacute;pida</li>
              <li>Men&uacute; Ni&ntilde;os</li>
              <li onClick={() => handleNewRecipes('soups')}>Sopas</li>
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
}
