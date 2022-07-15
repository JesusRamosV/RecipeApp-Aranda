import { FC } from "react";
import { DisplayHead2Props } from "./types";

import image from '../../assets/icons/ic_cake.svg'

export const DisplayHead2: FC<DisplayHead2Props> = ({
    imgMenu,
    food
}) => {
    
    return (
        <div className="tarjetMenu">
            <img alt="Image-Menu" className="imgMenu" src={imgMenu} />
            <span className="foodMenu">{food}</span>
        </div>
    )
    
    };