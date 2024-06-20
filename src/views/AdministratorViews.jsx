import { Outlet, Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/dashboard/Dashboard.jsx"
import { AdministratorNavBar } from "../components/navbar/AdministratorNavBar.jsx"
import { Create } from "../components/create/Create.jsx"
import { CreateClimbList } from "../components/create/CreateClimbList.jsx"

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
            </Route>
        </Routes>
    )
}
