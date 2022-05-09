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
                <img src={produto1} alt="produto1" />
              </Link>
              <Link to="/produto">Regata Machao SKULL TRASH <br />Preta</Link>
              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,30</span>
            </div>
            <div className={style.produto}>
              <Link to="/produto">
                <img src={produto2} alt="produto2" />
              </Link>
                <Link to="/produto">Regata Machao Arnold Legend <br /> Preta</Link>
              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,30</span>
            </div>
            <div className={style.produto}>
              <Link to="/produto">
                <img src={produto3} alt="produto3" />
              </Link>
              <Link to="/produto">Regata Machao DASH Azul</Link>
              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,0</span>
            </div>
            <div className={style.produto}>
              <Link to="/produto">
                <img src={produto4} alt="produto4" />
              </Link>
              <Link to="/produto">Regata Machao Bait Preta</Link>
              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,30</span>
            </div>
            <div className={style.produto}>
              <Link to="/produto">
                <img src={produto5} alt="produto5" />
              </Link>
              <Link to="/produto">Regata Machao States Azul <br /> Marinho</Link>
              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,30</span>
            </div>
          </div>
          <div className={style.produtos}>
            <div className={style.produto}>
              <Link to="/produto">
                <img src={produto6} alt="produto6" />
              </Link>
              <Link to="/produto">Regata Feminina Anatomic Dry <br />ABS Preta</Link>
              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,30</span>
            </div>
            <div className={style.produto}>
              <Link to="/produto">
                <img src={produto7} alt="produto8" />
              </Link>
              <Link to="/produto">Regata Feminina Anatomic Dry <br />Baseball 29 Preta</Link>
              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,30</span>
            </div>
            <div className={style.produto}>
              <Link to="/produto">
                <img src={produto8} alt="produto8" />
              </Link>
              <Link to="/produto">Regata Feminina Anatomic <br />SNAKE Branca</Link>
              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,30</span>
            </div>
            <div className={style.produto}>
              <Link to="/produto">
                <img src={produto9} alt="produto8" />
              </Link>
              <Link to="/produto">Regata Feminina Anatomic <br />REDSKULL Vermelha</Link>
              <label>R$ 99,90</label>
              <span>Ou em 3x no cartão de 33,30</span>
            </div>
            <div className={style.produto}>
              <Link to="/produto">
                <img src={produto10} alt="produto8" />
              </Link>
              <Link to="/produto">Regata Femina Anatomic <br />CAMO GREY Cinza</Link>
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
