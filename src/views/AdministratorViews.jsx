import { Outlet, Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/dashboard/Dashboard.jsx"
import { AdministratorNavBar } from "../components/navbar/AdministratorNavBar.jsx"
import { Create } from "../components/create/Create.jsx"
import { CreateClimbList } from "../components/create/CreateClimbList.jsx"
import { AdminValidate } from "../components/validate/AdminValidate.jsx"
import { AdminValidateNote } from "../components/validate/AdminValidateNote.jsx"

export const AdministratorViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <AdministratorNavBar />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Dashboard currentUser={currentUser} />} />
                <Route path="create">
                    <Route index element={<Create currentUser={currentUser} />} />
                    <Route path="climbList" element={<CreateClimbList currentUser={currentUser} />} />
                </Route>
                <Route path="validate">
                    <Route index element={<AdminValidate currentUser={currentUser} />} />
                    <Route path="note" element={<AdminValidateNote currentUser={currentUser} />} />
                </Route>
            </Route>
        </Routes>
    )
}
