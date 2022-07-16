import { FC } from "react";
import { DisplayHead2Props } from "./types";
import { foodTypeSelectedReducer } from "../../store/Slice/foodTypeSelectedSlice";
import { useAppDispatch } from "../../store";


export const DisplayHead2: FC<DisplayHead2Props> = ({
  imgMenu,
  food,
  queryParams,
}) => {

  const item = {
    name: food,
    queryParams: queryParams
  }
  const dispatch = useAppDispatch();

  const handleNewRecipes = (type: any) =>
    dispatch(foodTypeSelectedReducer(type));
  
  return (
    <div onClick={() => handleNewRecipes(item)} className="tarjetMenu">
      <img alt="Menu" className="imgMenu" src={imgMenu} />
      <span className="foodMenu">{food}</span>
    </div>
  );
};
