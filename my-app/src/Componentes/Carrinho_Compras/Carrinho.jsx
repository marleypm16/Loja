import style from './Carrinho.module.css'
import Camisa from '../Pages/img/produto1.jpg'
import {BsFillTrashFill} from 'react-icons/bs'
import Description from '../Layout/Description'
function Carrinho({id,handleRemove}){
    function Excluir(e){
        e.preventDefault()
        handleRemove(id)
    }

    return(
    <div className={style.conteiner}>
        <div className={style.compras}>
            <h2>CARRINHO DE COMPRAS</h2>
            <div className={style.compras_conteiner}>
                <div className={style.information} >
                    <div className={style.produto}>
                        <p>Imagem</p>
                        <img src={Camisa} alt="" />
                    </div>
                    <div className={style.produto}>
                        <p>Nome do produto</p>
                        <Description text='REGATA'/>
                    </div>
                    <div className={style.produto}>
                        <p>Preço</p>
                        <p className={style.price}>99,90</p> 
                    </div>
                    <div className={style.produto}>
                        <p>QTD</p>
                        <input type='text' className={style.qtd}></input>
                    </div>
                        <button onClick={Excluir} >
                            <BsFillTrashFill title='Excluir Item'/>
                        </button>
                </div>
            </div>
        </div>
    </div>             
    )
}

export default Carrinho