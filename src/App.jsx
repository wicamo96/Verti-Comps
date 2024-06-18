import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Authorized } from './views/Authorized.jsx'
import { ApplicationViews } from './views/ApplicationViews.jsx'
import { Login } from './components/auth/Login.jsx'
import { Register } from './components/auth/Register.jsx'
import { NavBar } from './components/navbar/NavBar.jsx'

export const App = () => {

  return (
    <Routes>
        <Route path='login' element={<><NavBar /><Login /> </>}/>
        <Route path='register' element={<><NavBar /><Register /> </>} />

        <Route path='*' element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        } />
    </Routes>
  )
}
