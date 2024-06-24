import { AdministratorViews } from "./AdministratorViews.jsx"
import { CompetitorViews } from "./CompetitorViews.jsx"


export const ApplicationViews = ({ currentUser }) => {


  return currentUser?.isStaff ? <AdministratorViews currentUser={currentUser} /> : <CompetitorViews currentUser={currentUser}/>
}
