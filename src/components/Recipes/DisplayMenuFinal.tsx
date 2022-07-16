import { FC } from "react"
import { DisplayMenuFinalProps } from "./types"
import IcFavoriteSVG from "../../assets/icons/ic-favorite.svg";
import IcStar from "../../assets/icons/ic_star.svg";
import { useSelector } from "react-redux";
import { calificationRandom } from "../../helpers";


export const DisplayMenuFinal: FC<DisplayMenuFinalProps> =({
    idnormal,
    title,
    image,
    sourceUrl

}) => {
    const foodTypeSelected = useSelector((state: any) => state.foodTypeSelected);


    const openInNewTab = (url: string): void => {
        window.location.href = url;
      }

    return(
       // <a href={sourceUrl} className="linkToRecipe" target="_blank" rel="noreferrer">
        <li onClick={() => openInNewTab(sourceUrl)} className="tarjet">
            <div className="plate" style={{backgroundImage: `url(${image})`}}></div>
            <div id={idnormal} className="normalTarjet" >
            <div className="textFood">
                <span className="food">{title.substring(0, 7)}</span>
                <span className="foodDesc">{foodTypeSelected.queryParams}</span> 
            </div>
            <div className="score">
                <img alt="start" className="star" src={IcStar} />
                    <span>{calificationRandom(1,5)}</span>
                    <img alt="heart" className="heart" src={IcFavoriteSVG} />
                    </div>
            </div>
        </li>
      //  </a>
    )
    
}