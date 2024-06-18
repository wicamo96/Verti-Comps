import { Outlet, Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/dashboard/Dashboard.jsx"

export const CompetitorViews = ({ currentUser }) => {
    return (
        <Routes
            path="/"
            element={
                <>
                    <Outlet />
                </>
            }
        >
            <Route index element={<Dashboard currentUser={currentUser} />} />
        </Routes>
    )
}