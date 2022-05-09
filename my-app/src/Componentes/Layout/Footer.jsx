import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import style from './Footer.module.css'


function Footer(){
    return(
        <footer className={style.footer_conteiner}>
            <ul className={style.lista}>
                <li className={style.item}><FaFacebook/></li>
                <li className={style.item}><FaInstagram/></li>
                <li className={style.item}><FaLinkedin/></li>
            </ul>
            <p className={style.text}><span>Marley e Renato</span> &copy; 2022</p>
        </footer>
    )
}


export default Footer