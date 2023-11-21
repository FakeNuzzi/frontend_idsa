import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListPazienteComponent from './components/ListPazienteComponent'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import PazienteComponent from './components/PazienteComponent'
import Home from './components/Home'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
import { isUserLoggedIn } from './services/Authservice'

function App() {

    function AuthenticatedRoute({ children }) {
        const isAuth = isUserLoggedIn();
        if (isAuth) {
            return children;
        }

        return <Navigate to="/" />
    }

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
          {/* // http://localhost:3000 */}
            <Route path='/' element = { <Home />}></Route>
            {/* // http://localhost:3000/pazienti */}
            <Route path='/pazienti' element = { <ListPazienteComponent />}></Route>
                  {/* // http://localhost:3000/add-paziente */}
                  <Route path='/add-paziente' element={<AuthenticatedRoute><PazienteComponent /></AuthenticatedRoute> }></Route>
                  {/* // http://localhost:3000/edit-paziente/1 */}
                  <Route path='/edit-paziente/:id_paziente' element={<AuthenticatedRoute><PazienteComponent /></AuthenticatedRoute>}></Route>
            {/* // http://localhost:3000/register */}
            <Route path='/register' element={<RegisterComponent />}></Route>
            {/* // http://localhost:3000/login */}
            <Route path='/login' element={<LoginComponent />}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
