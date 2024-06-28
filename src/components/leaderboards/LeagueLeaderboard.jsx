import { useEffect, useState } from "react"
import { getLeagueLeaderboard } from "../../services/LeaderboardServices.jsx"
import { Table } from "reactstrap"
import "./LeagueLeaderboard.css"

export const LeagueLeaderboard = ({ currentUser }) => {
    const [leaderboardList, setLeaderboardList] = useState([])

    const getAndSetLeaderboard = () => {
        getLeagueLeaderboard().then(leaderboardObj => {
            setLeaderboardList(leaderboardObj)
        })
    }

    const sortLeaderboard = () => {
        leaderboardList.sort((a, b) => b.user.leaguePoints - a.user.leaguePoints) 
    }

    useEffect(() => {
        getAndSetLeaderboard()
    }, [])

    useEffect(() => {
        sortLeaderboard()
    }, [leaderboardList])

    return (
        <Table>
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Point Total
                    </th>
                </tr>
            </thead>
            <tbody>
            {leaderboardList.map(competitor => {
                return (
                    <tr className={competitor.userId === currentUser.id ? "grayBackground" : ""}>
                        <th scope="row">
                            {competitor.id}
                        </th>
                        <td>
                            {competitor.user.name}
                        </td>
                        <td>
                            {competitor.user.leaguePoints}
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </Table>
    )
}