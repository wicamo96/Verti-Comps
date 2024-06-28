import { useEffect, useState } from "react"
import { Table } from "reactstrap"
import { getLeagueLeaderboard } from "../../services/LeaderboardServices.jsx"
import "./Dashboard.css"
import { getCompetitionList } from "../../services/CompetitionServices.jsx"

export const Dashboard = ({ currentUser }) => {
    const [leaderboardList, setLeaderboardList] = useState([])
    const [competitionList, setCompetitionList] = useState([])

    const getAndSetLeaderboard = () => {
        getLeagueLeaderboard().then(leaderboardObj => {
            setLeaderboardList(leaderboardObj)
        })
    }

    const sortLeaderboard = () => {
        leaderboardList.sort((a, b) => b.user.leaguePoints - a.user.leaguePoints) 
    }

    const formattedDate = (datestring) => {
        console.log(datestring)
        const [year, month, day] = datestring.split("-")
        return `${month} - ${day} - ${year}`
    }

    useEffect(() => {
        getCompetitionList().then(competitionArr => {
            setCompetitionList(competitionArr)
        })
    }, [])

    useEffect(() => {
        getAndSetLeaderboard()
    }, [])

    useEffect(() => {
        sortLeaderboard()
    }, [leaderboardList])

    return (
        <>
            <h3 className="margin textDark">Dashboard</h3>
            <section className="dashboardContainer">
                <article className="leaderboardContainer">
                    <h2>Leaderboard</h2>
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
                                <tr className={competitor.userId === currentUser.id ? "grayBackground" : ""} key={competitor.id}>
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
                </article>
                <article className="competitionContainer">
                    <h2 className="margin">Competitions</h2>
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Date
                                </th>
                                <th>
                                    Location
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {competitionList.map(competition => {
                                return (
                                    <tr key={competition.id}>
                                        <th scope="row">
                                            {competition.name}
                                        </th>
                                        <td>
                                            {formattedDate(competition.date)}
                                        </td>
                                        <td>
                                            {competition.location}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </article>
            </section>
        </>
    )
}