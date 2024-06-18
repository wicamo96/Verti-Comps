import { Outlet, Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/dashboard/Dashboard.jsx"
import { AdministratorNavBar } from "../components/navbar/AdministratorNavBar.jsx"

export const AdministratorViews = () => {
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
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    )
}