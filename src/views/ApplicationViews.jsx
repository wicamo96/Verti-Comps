import { useEffect, useState } from "react"
import { AdministratorViews } from "./AdministratorViews.jsx"
import { CompetitorViews } from "./CompetitorViews.jsx"


export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localVertiUser = localStorage.getItem("verti_user")
    const vertiUserObject = JSON.parse(localVertiUser)

    setCurrentUser(vertiUserObject)
  }, [])

  return currentUser.isStaff ? <AdministratorViews currentUser={currentUser} /> : <CompetitorViews currentUser={currentUser}/>
}
