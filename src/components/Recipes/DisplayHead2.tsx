import { FC } from "react";
import { DisplayHead2Props } from "./types";
import { useDispatch} from "react-redux";
import { foodTypeSelectedReducer } from "../../store/Slice/foodTypeSelectedSlice";

export const DisplayHead2: FC<DisplayHead2Props> = ({
  imgMenu,
  food,
  queryParams,
}) => {
  const dispatch = useDispatch();

  const handleNewRecipes = (type: string | undefined) =>
    dispatch(foodTypeSelectedReducer(type));
  
  return (
    <div onClick={() => handleNewRecipes(queryParams)} className="tarjetMenu">
      <img alt="Menu" className="imgMenu" src={imgMenu} />
      <span className="foodMenu">{food}</span>
    </div>
  );
};
