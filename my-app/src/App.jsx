import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Conteiner from './Componentes/Layout/Conteiner'
import Home from './Componentes/Pages/Home'
import NavBar from './Componentes/Layout/NavBar'
import LogIn from './Componentes/Pages/Log-in'
import Feminino from './Componentes/Pages/Feminino'
import Masculino from './Componentes/Pages/Masculino'
import Sacola from './Componentes/Pages/Sacola'
import Footer from './Componentes/Layout/Footer'
import Produto from './Componentes/Layout/Produto'
import Compras from './Componentes/Carrinho_Compras/Compras'



function App() {

  return (
    <Router>
      <NavBar/>
        <Conteiner customClass='heigth'>
          <Routes>
            <>
              <Route path='/' element={<Home/>}/>
              <Route path='/masculino' element={<Masculino/>}/>
              <Route path='/feminino' element={<Feminino/>}/>  
              <Route path='/sacola' element={<Sacola/>}/>
              <Route path='/login' element={<LogIn/>}/>
              <Route path='/produto' element={<Produto/>}/>
            </>
          </Routes>
        </Conteiner>    
      <Footer/>
    </Router>
  );
}

export default App
