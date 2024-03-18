import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './Inicio/Inicio.jsx'
import Proyectos from './Proyecto/Proyectos.jsx'
import Sobremi from './Sobremi/Sobremi.jsx'
import Menu from './Menu/Menu.jsx'


function App() {

  return (
   <div>
     <Menu/>
      <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/proyectos' element={<Proyectos/>}/>
      <Route path='/sobremi' element={<Sobremi/>}/>
      </Routes>
   </div>
  )
}

export default App;
