import Imagem from './banner.jpg'
import style from './Home.module.css'
import left1 from './img/img_left1.jpg'
import left2 from './img/img_left2.jpg'
import center from './img/img_center.jpg'
import right1 from './img/img_rigth1.jpg'
import right2 from './img/img_rigth2.jpg'
import produto1 from './img/produto1.jpg'
import produto2 from './img/produto2.jpg'
import produto3 from './img/produto 3.jpg'
import produto4 from './img/produto4.jpg'
import produto5 from './img/produto5.jpg'
import produto6 from './img/produto6.jpg'
import produto7 from './img/produto7.jpg'
import produto8 from './img/produto8.jpg'
import produto9 from './img/produto9.jpg'
import produto10 from './img/produto10.jpg'

function Home(){
    return(
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
                    <h1>PRODUTOS EM DESTAQUE</h1>
                    <div className={style.produtos}>
                        <img src={produto1} alt="produto1" />
                        <img src={produto2} alt="produto2" />
                        <img src={produto3} alt="produto3" />
                        <img src={produto4} alt="produto4" />
                        <img src={produto5} alt="produto5" />
                    </div>
                    <div className={style.produtos}>
                        <img src={produto6} alt="produto6" />
                        <img src={produto7} alt="produto7" />
                        <img src={produto8} alt="produto8" />
                        <img src={produto9} alt="produto9" />
                        <img src={produto10} alt="produto10" />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home