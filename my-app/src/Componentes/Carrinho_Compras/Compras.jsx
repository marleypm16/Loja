import BuyButton from '../Layout/BuyButton'

import style from './Compras.module.css'
import { useEffect, useState } from 'react'
import Carrinho from './Carrinho'

function Compras(){
    const [produto, setProduto]= useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/sacola",{
            method : 'GET',
            headers : {
                "Content-type": "application/json"
            }
        }).then((resp)=> resp.json()).then((data)=>{
            setProduto(data)
        }).catch((err)=>console.log(err))
    },[])

    function ExcluirItem(id){
        fetch(`http://localhost:5000/sacola/${id}`,{
            method: "DELETE",
            headers : {
                "Content-type" : "application/json"
            }
        }).then((resp)=> resp.json())
        .then(()=>{
            produto.filter((produtos)=> produtos.id !== id)
        })
        .catch((err)=>console.log(err))
    }

    return(
        <>
        <Carrinho handleRemove={ExcluirItem}/>
        <div className={style.cupom_frete}>
            <div className={style.vazio}></div>   
            <div className={style.cupom} >
                <h3>Cupom de desconto</h3>
                <p>Informe aqui seu cupom promocional</p>
                <input type="text" placeholder='Cupom' name="" id="" />
                <button>Usar cupom</button>
                <h3>Calcular Frete</h3>
                <p>Informe seu cep para calcular o valor da entrega</p>
                <select name="" id="">
                    <option value="">Selecione o Estado...</option>
                    <option value="">Acre</option>
                    <option value="">Alagoas</option>
                    <option value="">Amapá</option>
                    <option value="">Amazonas</option>
                    <option value="">Bahia</option>
                    <option value="">Ceará</option>
                    <option value="">Distrito Federal</option>
                    <option value="">Espirito Santo</option>
                    <option value="">Selecione o Estado...</option>
                    <option value="">Góias</option>
                    <option value="">Maranhão</option>
                    <option value="">Mato Grosso</option>
                    <option value="">Mato Grosso do Sul</option>
                    <option value="">Minas Gerais</option>
                    <option value="">Paraná</option>
                    <option value="">Paraíba</option>
                    <option value="">Pará</option>
                    <option value="">Pernambuco</option>
                    <option value="">Piauí</option>
                    <option value="">Rio Grande do Norte</option>
                    <option value="">Rio Grande do Sul</option>
                    <option value="">Rio de Janeiro</option>
                    <option value="">Rondônia</option>
                    <option value="">Roraima</option>
                    <option value="">Santa Catarina</option>
                    <option value="">Sergipe</option>
                    <option value="">São Paulo</option>
                    <option value="">Tocantins</option>
                </select>
                <p>CEP</p>
                <input type="number" />
                <button>Calcular</button>
            </div>
            <div className={style.frete}>
                
                    <h3>Valor Total <span>{}</span></h3>
        
                    <BuyButton text='Finalizar Compra'/>
                
            </div>
        </div>    
    </>
    )
}   


export default Compras