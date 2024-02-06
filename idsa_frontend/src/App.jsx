import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListPazienteComponent from './components/admin/ListPazienteComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MenuComponent from './components/admin/MenuComponent'
import ListMedicoComponent from './components/admin/ListMedicoComponent'
import Homepage from './components/home/Homepage'
import VisualizzaPaziente from './components/viste/VisualizzaPaziente'
import VisualizzaMedico from './components/viste/VisualizzaMedico'
import VisualizzaVisita from './components/viste/VisualizzaVisita'
import VisualizzaCartella from './components/liste/VisualizzaCartella'
import AppuntamentiPaziente from './components/liste/AppuntamentiPaziente'
import MenuVisite from './components/liste/MenuVisite'
import ProfiloUtente from './components/viste/ProfiloUtente'
import AppuntamentiHr from './components/liste/AppuntamentiHr'
import AppuntamentiMedico from './components/liste/AppuntamentiMedico'
import ProfiloMedico from './components/viste/ProfiloMedico'
import AppuntamentoForm from './components/viste/AppuntamentoForm'
import PazienteLogin from './components/login/PazienteLogin'
import MedicoLogin from './components/login/MedicoLogin'
import AdminLogin from './components/login/AdminLogin'
import HrLogin from './components/login/HrLogin'

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
            <Route path='/add-paziente' element = { <ProfiloUtente/> }></Route>
            {/* // http://localhost:3000/edit-paziente/1 */}
            <Route path='/edit-paziente/:id_paziente' element={<ProfiloUtente />}></Route>
            {/* // http://localhost:3000/medici */}
            <Route path='/medici' element = { <ListMedicoComponent />}></Route>
            {/* // http://localhost:3000/add-medico */}
            <Route path='/add-medico' element={<ProfiloMedico />}></Route>
            {/* // http://localhost:3000/edit-medico/1 */}
            <Route path='/edit-medico/:id_medico' element={<ProfiloMedico />}></Route>
            {/* // http://localhost:3000/add-appuntamento */}
            <Route path='/add-appuntamento' element={<AppuntamentoForm />}></Route>
            {/* // http://localhost:3000/edit-appuntamento/1 */}
            <Route path='/edit-appuntamento/:id_appuntamento' element={<AppuntamentoForm />}></Route>
            {/* // http://localhost:3000/visualizzaPaziente/1 */}
            <Route path='/visualizzaPaziente/:idPaziente' element={<VisualizzaPaziente />}></Route>
            {/* // http://localhost:3000/visualizzaMedico/1 */}
            <Route path='/visualizzaMedico/:idMedico' element={<VisualizzaMedico />}></Route>
            {/* // http://localhost:3000/visualizzaVisita/1 */}
            <Route path='/visualizzaVisita/:idVisita' element={<VisualizzaVisita />}></Route>
            {/* // http://localhost:3000/visualizzaCartella/1 */}
            <Route path='/visualizzaCartella/:idPaziente' element={<VisualizzaCartella />}></Route>
            {/* // http://localhost:3000/appuntamentiPaziente/1 */}
            <Route path='/appuntamentiPaziente/:idPaziente' element={<AppuntamentiPaziente />}></Route>
            {/* // http://localhost:3000/menuVisite */}
            <Route path='/menuVisite' element={<MenuVisite />}></Route>
            {/* // http://localhost:3000/profiloUtente/1 */}
            <Route path='/profiloUtente/:idPaziente' element={<ProfiloUtente />}></Route>
            {/* // http://localhost:3000/appuntamentiHr */}
            <Route path='/appuntamentiHr' element={<AppuntamentiHr />}></Route>
            {/* // http://localhost:3000/appuntamentiMedico/1 */}
            <Route path='/appuntamentiMedico/:idMedico' element={<AppuntamentiMedico />}></Route>
            {/* // http://localhost:3000/loginPaziente */}
            <Route path='/loginPaziente' element={< PazienteLogin />}></Route>
            {/* // http://localhost:3000/loginMedico */}
            <Route path='/loginMedico' element={< MedicoLogin />}></Route>
            {/* // http://localhost:3000/loginAdmin */}
            <Route path='/loginAdmin' element={< AdminLogin />}></Route>
            {/* // http://localhost:3000/loginHr */}
            <Route path='/loginHr' element={< HrLogin />}></Route>

          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
