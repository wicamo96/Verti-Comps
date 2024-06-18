import { Outlet, Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/dashboard/Dashboard.jsx"
import { AdministratorNavBar } from "../components/navbar/AdministratorNavBar.jsx"

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
            </Route>
        </Routes>
    )
}