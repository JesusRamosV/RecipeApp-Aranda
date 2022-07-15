
import Patrocinio from '../../assets/Grupo 7610.png'

export function Footer() {
  
  return (
    <div className="footer">
      <div className="textfooter">
        {" "}
        <span>Con el patrocinio de</span>
      </div>
      <img alt="footer" className="imgFooter" src={Patrocinio}/>
    </div>
  );
}
