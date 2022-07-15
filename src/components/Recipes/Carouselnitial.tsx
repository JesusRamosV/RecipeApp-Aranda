import { FC } from "react";
import { CarouselInitialProps } from "./types";
import IcFavoriteSVG from "../../assets/icons/ic-favorite.svg";
import IcPortion from "../../assets/icons/ic_portion.svg";
import IcTime from "../../assets/icons/ic_time.svg";
import IcChef from "../../assets/icons/ic_chef.svg";
import IcStar from "../../assets/icons/ic_star.svg";

export const CarouselInitial: FC<CarouselInitialProps> = ({
  calification,
  difficulty,
  idnormal,
  idhover,
  readyInMinutes,
  servings,
  title,
  urlimage,
  type
}) => {
  const showHover = () => {
    document.getElementById(idnormal)?.setAttribute("hidden", "true");
    document.getElementById(idhover)?.removeAttribute("hidden");
  };

  /**muestra panel normal */
  const showNormal = () => {
    document.getElementById(idnormal)?.removeAttribute("hidden");
    document.getElementById(idhover)?.setAttribute("hidden", "true");
  };

  return (
    <li className="tarjet" onMouseOver={showHover} onMouseOut={showNormal}>
      <div
        className="plate"
        style={{ backgroundImage: `url(${urlimage})` }}
      ></div>
      <div id={idnormal} className="normalTarjet">
        <div className="textFood">
          <span className="food">{title.substring(0, 8)}</span>
          <span className="foodDesc">&nbsp;{type}</span>
        </div>
        <div className="score">
          <img alt="ic_star" className="star" src={IcStar} />
          <span>{calification}</span>
          <img alt="ic-favorite" className="heart" src={IcFavoriteSVG} />
        </div>
      </div>
      <div id={idhover} className="divhover" hidden>
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
            <span className="textHover">{difficulty}</span>
          </div>
        </div>
      </div>
    </li>
  );
};
