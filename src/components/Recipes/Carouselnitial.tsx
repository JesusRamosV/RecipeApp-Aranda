import { FC, useState } from "react";
import { CarouselInitialProps } from "./types";
import IcFavoriteSVG from "../../assets/icons/ic-favorite.svg";
import IcPortion from "../../assets/icons/ic_portion.svg";
import IcTime from "../../assets/icons/ic_time.svg";
import IcChef from "../../assets/icons/ic_chef.svg";
import IcStar from "../../assets/icons/ic_star.svg";
import { useSelector } from "react-redux";

const difficultyRandom = () => {
  const difficultyArray = ["Fácil", "Dificil"];
  let position = Math.floor(Math.random() * 2);
  return difficultyArray[position];
};

const calificationRandom = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

let i:number = 1;

export const CarouselInitial: FC<CarouselInitialProps> = ({
 
  readyInMinutes,
  servings,
  title,
  image,
}, ) => {

 
  
  const foodTypeSelected = useSelector((state: any) => state.foodTypeSelected);
  const showHover = () => {
    document.getElementById(`normal${i}`)?.setAttribute("hidden", "true");
    document.getElementById(`hover1${i}`)?.removeAttribute("hidden");
  };

  /**muestra panel normal */
  const showNormal = () => {
    document.getElementById(`normal${i}`)?.removeAttribute("hidden");
    document.getElementById(`hover1${i}`)?.setAttribute("hidden", "true");
  };
  i += 1;
  return (
    <li className="tarjet" onMouseOver={showHover} onMouseOut={showNormal}>
      <div className="plate" style={{ backgroundImage: `url(${image})` }}></div>
      <div id={`normal${i}`} className="normalTarjet">
        <div className="textFood">
          <span className="food">{title.substring(0, 8)}</span>
          <span className="foodDesc">&nbsp;{foodTypeSelected}</span>
        </div>
        <div className="score">
          <img alt="ic_star" className="star" src={IcStar} />
          <span>{calificationRandom(1, 5)}</span>
          <img alt="ic-favorite" className="heart" src={IcFavoriteSVG} />
        </div>
      </div>
      <div id={`hover1${i}`} className="divhover" hidden>
        <div className="hoverTarjet">
          <div className="descriptionHover">
            <img alt="ic_portion" className="imgHover" src={IcPortion} />
            <span className="titTextHover">
              Tama&ntilde;o de la porci&oacute;n
            </span>
            <span className="textHover">{servings} raciones</span>
          </div>
          <div className="descriptionHover">
            <img alt="ic_time" className="imgHover" src={IcTime} />
            <span className="titTextHover">Tiempo de preparaci&oacute;n</span>
            <span className="textHover">{readyInMinutes} minutos</span>
          </div>
          <div className="descriptionHover">
            <img alt="ic_chef" className="imgHover" src={IcChef} />
            <span className="titTextHover">Dificultad</span>
            <span className="textHover">{difficultyRandom()}</span>
          </div>
        </div>
      </div>
    </li>
  );
};
