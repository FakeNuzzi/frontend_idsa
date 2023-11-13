import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListPazienteComponent from './components/ListPazienteComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PazienteComponent from './components/PazienteComponent'
import MenuComponent from './components/MenuComponent'
import ListMedicoComponent from './components/ListMedicoComponent'
import MedicoComponent from './components/MedicoComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
          {/* // http://localhost:3000 */}
            <Route path='/' element = { <MenuComponent />}></Route>
            {/* // http://localhost:3000/pazienti */}
            <Route path='/pazienti' element = { <ListPazienteComponent />}></Route>
            {/* // http://localhost:3000/add-paziente */}
            <Route path='/add-paziente' element = { <PazienteComponent/> }></Route>
            {/* // http://localhost:3000/edit-paziente/1 */}
            <Route path='/edit-paziente/:id_paziente' element = { <PazienteComponent/> }></Route>
            {/* // http://localhost:3000/medici */}
            <Route path='/medici' element = { <ListMedicoComponent />}></Route>
            {/* // http://localhost:3000/add-medico */}
            <Route path='/add-medico' element = { <MedicoComponent/> }></Route>
            {/* // http://localhost:3000/edit-medico/1 */}
            <Route path='/edit-medico/:id_medico' element = { <MedicoComponent/> }></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
