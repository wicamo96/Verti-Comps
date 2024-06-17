import { Outlet, Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/dashboard/Dashboard.jsx"

export const AdministratorViews = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    )
}