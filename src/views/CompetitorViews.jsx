import { Outlet, Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/dashboard/Dashboard.jsx"

export const CompetitorViews = () => {
    return (
        <Routes
            path="/"
            element={
                <>
                    <Outlet />
                </>
            }
        >
            <Route index element={<Dashboard />} />
        </Routes>
    )
}