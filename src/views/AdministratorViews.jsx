import { Outlet, Route, Routes } from "react-router-dom"
import { Dashboard } from "../components/dashboard/Dashboard.jsx"
import { AdministratorNavBar } from "../components/navbar/AdministratorNavBar.jsx"
import { Create } from "../components/create/Create.jsx"
import { CreateClimbList } from "../components/create/CreateClimbList.jsx"
import { AdminValidate } from "../components/validate/AdminValidate.jsx"
import { AdminValidateNote } from "../components/validate/AdminValidateNote.jsx"
import { AdminCompetitionList } from "../components/competitions/AdminCompetitionList.jsx"
import { CompetitionRegistrants } from "../components/competitions/CompetitionRegistrants.jsx"
import { EditCompetition } from "../components/competitions/EditCompetition.jsx"
import { LeagueLeaderboard } from "../components/leaderboards/LeagueLeaderboard.jsx"
import { AdminCompetitionDetails } from "../components/competitions/AdminCompetitionDetails.jsx"

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
                <Route path="competitions">
                    <Route index element={<AdminCompetitionList currentUser={currentUser} />} />
                    <Route path="registration" element={<CompetitionRegistrants currentUser={currentUser} />} />
                    <Route path="edit" element={<EditCompetition currentUser={currentUser} />} />
                    <Route path="details" element={<AdminCompetitionDetails />} />
                </Route>
                <Route path="leagueLeaderboard">
                    <Route index element={<LeagueLeaderboard currentUser={currentUser} />} />
                </Route>
            </Route>
        </Routes>
    )
}
