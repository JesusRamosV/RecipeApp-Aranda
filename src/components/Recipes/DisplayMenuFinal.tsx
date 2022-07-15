import { FC } from "react"
import { CarouselInitialProps } from "./types"
import IcFavoriteSVG from "../../assets/icons/ic-favorite.svg";
import IcStar from "../../assets/icons/ic_star.svg";
import { useSelector } from "react-redux";
import { calificationRandom } from "../../helpers";


export const DisplayMenuFinal: FC<CarouselInitialProps> =({
    idnormal,
  title,
  image

}) => {
    const foodTypeSelected = useSelector((state: any) => state.foodTypeSelected);
    return(
        
        <li className="tarjet">
            <div className="plate" style={{backgroundImage: `url(${image})`}}></div>
            <div id={idnormal} className="normalTarjet" >
            <div className="textFood">
                <span className="food">{title.substring(0, 7)}</span>
                <span className="foodDesc">{foodTypeSelected}</span> 
            </div>
            <div className="score">
                <img alt="start" className="star" src={IcStar} />
                    <span>{calificationRandom(1,5)}</span>
                    <img alt="heart" className="heart" src={IcFavoriteSVG} />
                    </div>
            </div>
        </li>

    )
    
}