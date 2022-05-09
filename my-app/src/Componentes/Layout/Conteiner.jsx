import style from './Conteiner.module.css'


function Conteiner(props){
    return(
        <div className={`${style.conteiner} ${style[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Conteiner