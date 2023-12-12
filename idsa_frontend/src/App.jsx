import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListPazienteComponent from './components/hr/ListPazienteComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PazienteComponent from './components/hr/PazienteComponent'
import MenuComponent from './components/hr/MenuComponent'
import ListMedicoComponent from './components/hr/ListMedicoComponent'
import MedicoComponent from './components/hr/MedicoComponent'
import Homepage from './components/home/Homepage'
import VisualizzaPaziente from './components/viste/VisualizzaPaziente'
import VisualizzaMedico from './components/viste/VisualizzaMedico'
import VisualizzaVisita from './components/viste/VisualizzaVisita'
import VisualizzaCartella from './components/liste/VisualizzaCartella'
import AppuntamentiPaziente from './components/liste/AppuntamentiPaziente'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
            {/* // http://localhost:3000 */}
            <Route path='/' element={<Homepage />}></Route>
            {/* // http://localhost:3000/hr */}
            <Route path='/menuComponent' element = { <MenuComponent />}></Route>
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
            <Route path='/edit-medico/:id_medico' element={<MedicoComponent />}></Route>
            {/* // http://localhost:3000/visualizzaPaziente/1 */}
            <Route path='/visualizzaPaziente/:idPaziente' element={<VisualizzaPaziente />}></Route>
            {/* // http://localhost:3000/visualizzaMedico/1 */}
            <Route path='/visualizzaMedico/:idMedico' element={<VisualizzaMedico />}></Route>
            {/* // http://localhost:3000/visualizzaVisita/1 */}
            <Route path='/visualizzaVisista/:idVisita' element={<VisualizzaVisita />}></Route>
            {/* // http://localhost:3000/visualizzaCartella/1 */}
            <Route path='/visualizzaCartella/:idVisita' element={<VisualizzaCartella />}></Route>
            {/* // http://localhost:3000/appuntamentiPaziente */}
            <Route path='/appuntamentiPaziente' element={<AppuntamentiPaziente />}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
