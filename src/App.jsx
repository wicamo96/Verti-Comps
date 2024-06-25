import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Authorized } from './views/Authorized.jsx'
import { ApplicationViews } from './views/ApplicationViews.jsx'
import { Login } from './components/auth/Login.jsx'
import { Register } from './components/auth/Register.jsx'
import { LeagueLeaderboard } from './components/leaderboards/LeagueLeaderboard.jsx'
import { NavBar } from './components/navbar/NavBar.jsx'
import { useEffect, useState } from 'react'
import { AdministratorNavBar } from './components/navbar/AdministratorNavBar.jsx'
import { CompetitorNavBar } from './components/navbar/CompetitorNavBar.jsx'

export const App = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localVertiUser = localStorage.getItem("verti_user")
    const vertiUserObject = JSON.parse(localVertiUser)

    setCurrentUser(vertiUserObject)
  }, [])

  return (
    <Routes>
      <Route path='/login' element={<><NavBar /><Login /></>} />
      <Route path='/register' element={<><NavBar /><Register /></>} />
      <Route path='/leagueLeaderboard' element={<>{!currentUser ? <NavBar /> : currentUser?.isStaff ? <AdministratorNavBar /> : <CompetitorNavBar />}<LeagueLeaderboard /></>} />

        <Route path='*' element={
          <Authorized>
            <ApplicationViews/>
          </Authorized>
        } />
    </Routes>
  )
}
