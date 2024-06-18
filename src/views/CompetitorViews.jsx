import { Outlet, Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/dashboard/Dashboard.jsx"
import { CompetitorNavBar } from "../components/navbar/CompetitorNavBar.jsx"

export const CompetitorViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <CompetitorNavBar />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    )
}