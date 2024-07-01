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
        <>
            <h3 className="margin textDark">Leaderboard</h3>
            <Table>
                <thead>
                    <tr>
                        <th className="textDark">
                            #
                        </th>
                        <th className="textDark">
                            Name
                        </th>
                        <th className="textDark">
                            Point Total
                        </th>
                    </tr>
                </thead>
                <tbody>
                {leaderboardList.map(competitor => {
                    return (
                        <tr className={competitor.userId === currentUser?.id ? "grayBackground" : ""}>
                            <th scope="row" className="textDark">
                                {competitor.id}
                            </th>
                            <td className="textDark">
                                {competitor.user.name}
                            </td>
                            <td className="textDark">
                                {competitor.user.leaguePoints}
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </>
    )
}