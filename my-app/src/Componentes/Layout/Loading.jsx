import style from './Loading.module.css'
import loader from './loading.svg'

function Loading(){
    return(
        <div className={style.loader_conteiner}>
            <img className={style.loader} src={loader} alt="loading" />
        </div>
    )
}

export default Loading