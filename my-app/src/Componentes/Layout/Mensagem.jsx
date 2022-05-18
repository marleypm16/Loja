import { useEffect, useState } from "react"
import style from './Mensagem.module.css'

function Mensagem({msg,type}){
    const [visible, SetVisible] = useState(false)
    useEffect(()=>{
        if(!msg){
            SetVisible(false)
            return
        }

        SetVisible(true)

        const timer= setTimeout(()=>{
            SetVisible(false)
        }, 5000)

        return()=> clearTimeout(timer)
    },[msg])
    return(
        <>
            {
                visible && (
                        <div className={`${style.mensagem} ${style[type]}`}><p>{msg}</p></div>
                )
            }
        </>
    )
}


export default Mensagem