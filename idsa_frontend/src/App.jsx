import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListPazienteComponent from './components/ListPazienteComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PazienteComponent from './components/PazienteComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
          {/* // http://localhost:3000 */}
            <Route path='/' element = { <ListPazienteComponent />}></Route>
            {/* // http://localhost:3000/pazienti */}
            <Route path='/pazienti' element = { <ListPazienteComponent />}></Route>
            {/* // http://localhost:3000/add-paziente */}
            <Route path='/add-paziente' element = { <PazienteComponent/> }></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
