import style from './Sacola.module.css'
import { useEffect, useState} from 'react';
import Compras from '../Carrinho_Compras/Compras';



function Sacola({name}){

    const [produtos,setProdutos] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/sacola',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }}).then((resp) => resp.json())
        .then((data) => {
            setProdutos(data)
        })
        .catch((err) => console.log(err))
      },[])

    function ExcluirItem(){

    }

    return(
        <>

        {
           produtos.length > 0 && (
               <Compras/>
           ) 
        }


            {
                produtos.length === 0 && (
                    <div className={style.sacola_conteiner}>
                            <h1>{name}</h1>
                        <div className={style.title}>
                            <h2>CARRINHO VAZIO</h2>
                        </div>
                        <div className={style.text}>
                            <p>Nenhum produto no carrinho.</p>
                            <p>Clique<span> aqui</span> para continuar comprando</p>
                        </div>
                   </div>)
            }
        </>
    
       ) }
    

export default Sacola

