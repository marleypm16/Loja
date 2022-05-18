import {Link} from 'react-router-dom'
import style from './BuyButton.module.css'

function BuyButton({text,name,sacola}){
    return(
        <button name={name} onClick={sacola} id={name} className={style.buybutton}>{text}</button>
    )
}

export default BuyButton