import {Link} from 'react-router-dom'
import Description from './Description'
import Frete from './Frete.jpg'
import Produto1 from '../Pages/img/produto1.jpg'
import style from './Produto.module.css'
import BuyButton from './BuyButton'
import Mensagem from './Mensagem'
import { useState,useEffect } from 'react'
import Loading from './Loading'
import { parse ,v4 as uuidv4} from 'uuid'
import { useParams } from 'react-router-dom'

function Produto(){
    const{id} = useParams()
    const [mensagem,setMensagem] =useState('')
    const [type,setType] =useState()
    const [produto,setProduto]= useState([])


    function AdicionarSacola(sacola){
        sacola.produto= [] 
        
        
        fetch(`http://localhost:5000/sacola/${id}`,{
          method: "POST",
          headers:{
            "Content-type": "application/json",
          },
        }).then((resp)=> resp.json())
        .then((data)=> console.log(data),
        setMensagem('O produto foi adicionado ao carrinho'),
        setType('item_adicionado_na_sacola'))
        .catch((err)=> console.log(err))
        
      }
  

      
    return(
       <div className={style.produto_conteiner}>
           <div className={style.product}>
               <div className={style.text}>
                    <label>
                        <Link to="/">Home /</Link> 
                    </label>
                    <Description text='Regata Machao SKULL TRASH'/>
               </div>
               <div className={style.imagem}>
                   <img src={Produto1} alt="Produto" />
               </div>
           </div>

           <div className={style.information}>
               <h2>Regata Machao SKULL TRASH</h2>
               <div className={style.descricao}>
                   <p>Descrição : <span> Em Estoque</span></p>

                   <p className={style.preco}>R$ 99,90</p>

                   <p className={style.divide}>Ou em 3x de 33,30 Sem juros</p>

                   <p className={style.avaliacao}>Seja o primeiro a avaliar este produto</p>

                   <div className={style.information_product}>
                       <p className={style.descricao_rapida}>Descriçao Rapida</p>
                        <p className={style.produto}>Regata Machao SKULL TRASH</p>
                        <p className={style.p_color_tecido}>Tecido 100% algodão</p>
                        <p className={style.p_color_tecido}>Tabela de medidas</p>
                   </div>
               </div>
               <div className={style.select}>
                   
                  <select name="" id="">
                      <option value="">Selecione...</option>
                      <option value="">P</option>
                      <option value="">M</option>
                      <option value="">G</option>
                      <option value="">GG</option>
                  </select>
               </div>
           
                <div className={style.compra}>
                    <div className={style.qtd}>
                        <p>Qtd:</p>
                        <input type="number" name="" id="" />
                
                        <BuyButton name='name' sacola={AdicionarSacola} text="Comprar"/>
                    </div>
                </div>
            </div>    
            <div className={style.frete}>
                <img src={Frete} alt="Frete Grátis" />
            </div>
        <Mensagem msg={mensagem} type={type}/>
       </div>

    )
    
}

export default Produto


// useEffect(()=>{
//     setTimeout(()=>{
//         fetch(`http://localhost:5000/sacola/${id}`,{
//         method : "GET",
//         headers :{
//             'content-type' : 'application/json'
//         }
//     }).then((resp)=> resp.json()).then((data)=>{
//         setProduto(data)
       
//     }).catch((err)=> console.log(err))
// },300)
//     },[id])