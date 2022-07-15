import { FC } from "react"
import { CarouselInitialProps } from "./types"
import IcFavoriteSVG from "../../assets/icons/ic-favorite.svg";
import IcStar from "../../assets/icons/ic_star.svg";


export const DisplayMenuFinal: FC<CarouselInitialProps> =({
    idnormal,
  title,
  urlimage

}) => {

    return(
        
        <li className="tarjet">
            <div className="plate" style={{backgroundImage: `url(${urlimage})`}}></div>
            <div id={idnormal} className="normalTarjet" >
            <div className="textFood">
                <span className="food">{title.substring(0, 7)}</span>
                <span className="foodDesc">Vegetarian</span> 
            </div>
            <div className="score">
                <img className="star" src={IcStar} />
                    <span>5</span>
                    <img className="heart" src={IcFavoriteSVG} />
                    </div>
            </div>
        </li>

    )
    
}