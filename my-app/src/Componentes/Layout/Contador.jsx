import style from './Contador.module.css'


function Contador({cont}){
    return(
        <div className={style.contador}>
            <p>{cont}</p>
        </div>
    )
}

export default Contador