import Imagem from "./banner.jpg";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
import left1 from "./img/img_left1.jpg";
import left2 from "./img/img_left2.jpg";
import center from "./img/img_center.jpg";
import right1 from "./img/img_rigth1.jpg";
import right2 from "./img/img_rigth2.jpg";
import produto1 from "./img/produto1.jpg";
import produto2 from "./img/produto2.jpg";
import produto3 from "./img/produto 3.jpg";
import produto4 from "./img/produto4.jpg";
import produto5 from "./img/produto5.jpg";
import produto6 from "./img/produto6.jpg";
import produto7 from "./img/produto7.jpg";
import produto8 from "./img/produto8.jpg";
import produto9 from "./img/produto9.jpg";
import produto10 from "./img/produto10.jpg";
import Img from "../Layout/Img";
import Description from "../Layout/Description";


function Home() {


  return (
    <div className={style.home_conteiner}>
      <figure>
        <img className={style.imagem} src={Imagem} alt="banner da home" />
      </figure>

      <main>
        <div className={style.main_conteiner}>
          <ul>
            <li>Frete Grátis por todo brasil</li>
            <li>Parcelamos em até 12x no cartão de crédito</li>
            <li>Site Seguro com certificado de segurança </li>
          </ul>
        </div>
        <div className={style.img_grid}>
          <div className={style.img_left}>
            <img src={left1} alt="l2" />
            <img src={left2} alt="l1" />
          </div>
          <div className={style.img_center}>
            <img src={center} alt="center" />
          </div>
          <div className={style.img_right}>
            <img src={right1} alt="r1" />
            <img src={right2} alt="r2" />
          </div>
        </div>
        <div className={style.product_conteiner}>
          <h2>PRODUTOS EM DESTAQUE</h2>
          <div className={style.produtos}>
            <div className={style.produto}>
              <Link to="/produto">
                <Img src={produto1} text="produto1" />
              </Link>

              <Description
                text="Regata Machao SKULL TRASH"
                quebradelinha="Preta"
              />

              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,30</span>
            </div>
            <div className={style.produto}>
              <Link to="/produto">
                <Img src={produto2} text="produto2" />
              </Link>

              <Description
                text="Regata Machao Arnold Legend"
                quebradelinha="Preta"
              />

              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,30</span>
            </div>
            <div className={style.produto}>
              <Link to="/produto">
                <Img src={produto3} text="produto3" />
              </Link>

              <Description text="Regata Machao DASH Azul" />

              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,0</span>
            </div>
            <div className={style.produto}>
              <Link to="/produto">
                <Img src={produto4} text="produto4" />
              </Link>
              <Description text="Regata Machao Bait Preta"/>
              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,30</span>
            </div>
            <div className={style.produto}>
              <Link to="/produto">
                <Img src={produto5} text="produto5" />
              </Link>
              <Description
                text="Regata Machao States Azul"
                quebradelinha="Marinho"
    
              />
              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,30</span>
            </div>
          </div>
          <div className={style.produtos}>
            <div className={style.produto}>
              <Link to="/produto">
                <Img src={produto6} text="produto6" />
              </Link>

              <Description
                text="Regata Feminina Anatomic Dry"
                quebradelinha="ABS Preta"
          
              />
              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,30</span>
            </div>
            <div className={style.produto}>
              <Link to="/produto">
                <Img src={produto7} text="produto7" />
              </Link>
              <Description
                text="Regata Feminina Anatomic Dry"
                quebradelinha="Baseball 29 Preta"
    
              />
              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,30</span>
            </div>
            <div className={style.produto}>
              <Link to="/produto">
                <Img src={produto8} text="produto8" />
              </Link>
              <Description
                text="Regata Feminina Anatomic"
                quebradelinha="SNAKE Branca"

              />
              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,30</span>
            </div>
            <div className={style.produto}>
              <Link to="/produto">
                <Img src={produto9} text="produto9" />
              </Link>
              <Description
                text="Regata Feminina Anatomic "
                quebradelinha="REDSKULL Vermelha"
       
              />

              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,30</span>
            </div>
            <div className={style.produto}>
              <Link to="/produto">
                <Img src={produto10} text="produto10" />
              </Link>

              <Description
                text="Regata Feminina Anatomic"
                quebradelinha="CAMO GREY CINZA"
              />

              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,30</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
