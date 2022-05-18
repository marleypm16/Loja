import { Link } from "react-router-dom"
import {BsCart3,BsSearch} from 'react-icons/bs'
import {FiUser} from 'react-icons/fi'
import Logo from './logo.svg'
import style from './Navbar.module.css'
import Contador from "./Contador"
import { useState } from "react"

function NavBar(){
    

    return(
        <>
            <nav className={style.nav}>
                    <section>
                        <Link to='/'> <img src={Logo} alt="img" className={style.imagem} /> </Link>
                    </section>
                       <section className={style.input}>
                            <input type="text" placeholder="O que você procura hoje?"/> <BsSearch color='#222' className={style.lupa}/>
                       </section>
                        <section>
                            <ul className={style.list}>
                                <li className={style.itens}><Link to='/'>Home</Link></li>
                                <li className={style.itens}><Link to='/login'><FiUser color="#fff"  className={style.icon}/> </Link></li>
                                <li className={style.itens}><Link to='/sacola'><BsCart3 className={style.icon}/></Link></li>
                                <Contador/>
                            </ul>
                        </section>
            </nav>

            <div className={style.category}>
                <section className={style.navigation}>
                        <ul>
                            <Link to='/promo'><li>Promoções</li></Link>
                            <Link to='/masculino'><li>Masculino</li></Link>
                            <Link to='/feminino'><li>Feminino</li></Link>
                            <Link to='/novidades'><li>Novidades</li></Link>
                            <Link to='/outlet'><li>Outlet</li></Link>
                        </ul>
                </section>
            </div>
        </>
        
    )
}

export default NavBar