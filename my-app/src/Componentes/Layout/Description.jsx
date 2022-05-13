import { Link } from "react-router-dom"
import style from './Description.module.css'


function Description({text,quebradelinha}){
    return(
        <Link to="/produto" className={style.texto}>{text} <br /> {quebradelinha}</Link>
    )
}


export  default Description