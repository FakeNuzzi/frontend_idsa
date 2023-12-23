import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListPazienteComponent from './components/admin/ListPazienteComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PazienteComponent from './components/admin/PazienteComponent'
import MenuComponent from './components/admin/MenuComponent'
import ListMedicoComponent from './components/admin/ListMedicoComponent'
import MedicoComponent from './components/admin/MedicoComponent'
import Homepage from './components/home/Homepage'
import VisualizzaPaziente from './components/viste/VisualizzaPaziente'
import VisualizzaMedico from './components/viste/VisualizzaMedico'
import VisualizzaVisita from './components/viste/VisualizzaVisita'
import VisualizzaCartella from './components/liste/VisualizzaCartella'
import AppuntamentiPaziente from './components/liste/AppuntamentiPaziente'
import MenuVisite from './components/liste/menuVisite'
import ProfiloUtente from './components/viste/ProfiloUtente'
import AppuntamentiHr from './components/liste/AppuntamentiHr'
import AppuntamentiMedico from './components/liste/AppuntamentiMedico'
import ProfiloMedico from './components/viste/ProfiloMedico'

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
                  {/* // http://localhost:3000/edit-paziente */}
                  <Route path='/edit-paziente/:id_paziente' element={<ProfiloUtente />}></Route>
            {/* // http://localhost:3000/medici */}
            <Route path='/medici' element = { <ListMedicoComponent />}></Route>
                  {/* // http://localhost:3000/add-medico */}
                  <Route path='/add-medico' element={<ProfiloMedico />}></Route>
            {/* // http://localhost:3000/edit-medico/1 */}
            <Route path='/edit-medico/:id_medico' element={<MedicoComponent />}></Route>
            {/* // http://localhost:3000/visualizzaPaziente/1 */}
            <Route path='/visualizzaPaziente/:idPaziente' element={<VisualizzaPaziente />}></Route>
            {/* // http://localhost:3000/visualizzaMedico/1 */}
            <Route path='/visualizzaMedico/:idMedico' element={<VisualizzaMedico />}></Route>
            {/* // http://localhost:3000/visualizzaVisita/1 */}
            <Route path='/visualizzaVisita/:idVisita' element={<VisualizzaVisita />}></Route>
            {/* // http://localhost:3000/visualizzaCartella */}
            <Route path='/visualizzaCartella' element={<VisualizzaCartella />}></Route>
            {/* // http://localhost:3000/appuntamentiPaziente */}
            <Route path='/appuntamentiPaziente' element={<AppuntamentiPaziente />}></Route>
            {/* // http://localhost:3000/menuVisite */}
            <Route path='/menuVisite' element={<MenuVisite />}></Route>
            {/* // http://localhost:3000/profiloUtente */}
            <Route path='/profiloUtente' element={<ProfiloUtente />}></Route>
            {/* // http://localhost:3000/appuntamentiHr */}
            <Route path='/appuntamentiHr' element={<AppuntamentiHr />}></Route>
            {/* // http://localhost:3000/appuntamentiMedico */}
            <Route path='/appuntamentiMedico' element={<AppuntamentiMedico />}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
