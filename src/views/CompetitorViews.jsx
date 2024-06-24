import { Outlet, Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/dashboard/Dashboard.jsx"
import { CompetitorNavBar } from "../components/navbar/CompetitorNavBar.jsx"
import { LeagueLeaderboard } from "../components/leaderboards/LeagueLeaderboard.jsx"
import { CompetitorValidate } from "../components/validate/CompetitorValidate.jsx"

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
                <Route path="validate">
                    <Route index element={<CompetitorValidate currentUser={currentUser} />} />
                </Route>
                <Route path="leagueLeaderboard">
                    <Route index element={<LeagueLeaderboard />} />
                </Route>
            </Route>
        </Routes>
    )
}