import { Button } from "reactstrap"
import { deleteCompetition, getCompetitionsViaLeaderboard, getRegistrantsByCompId } from "../../services/CompetitionServices.jsx"
import { useEffect, useState } from "react"
import { getLeagueLeaderboard } from "../../services/LeaderboardServices.jsx"

export const AdminCompetitionListRow = ({ competition, currentUser, competitionList, navigate, formattedDate }) => {
    const [compStatus, setCompStatus] = useState(competition.inProgress)
    const [competitionLeaderboard, setCompetitionLeaderboard] = useState([])
    const [competitionRegistrants, setCompetitionRegistrants] = useState([])
    const [leagueLeaderboard, setLeagueLeaderboard] = useState([])

    
    useEffect(() => {
        getCompetitionsViaLeaderboard().then(compArr => {
            const compLeaderboard = compArr.find(comp => comp.id === competition.id)
            setCompetitionLeaderboard(compLeaderboard.competitionLeaderboard)
        })
    }, [compStatus])
    
    useEffect(() => {
        getRegistrantsByCompId(competition).then(regArr => {
            setCompetitionRegistrants(regArr)
        })
    }, [])

    useEffect(() => {
        getLeagueLeaderboard().then(leaderboardArr => {
            setLeagueLeaderboard(leaderboardArr)
        })
    }, [])

    

    return (
        <tr key={competition.id}>
                                <th scope="row" className="textDark">
                                    <Button className="btn-color btn-lt-txt" onClick={() => navigate("/competitions/details", { state: { competition: competition, competitionLeaderboard: competitionLeaderboard, competitionRegistrants:competitionRegistrants, leagueLeaderboard: leagueLeaderboard }})}>
                                        {competition.name}
                                    </Button>
                                </th>
                                <td className="textDark">
                                    {formattedDate(competition.date)}
                                </td>
                                <td className="textDark">
                                    {competition.location}
                                </td>
                                <td>
                                    <Button color="link" onClick={() => navigate("/competitions/registration", { state: { competition: competition } })}>
                                        View And Edit
                                    </Button>
                                </td>
                                <td>
                                    {competition.userId === currentUser.id ? 
                                        <Button className="btn-color btn-lt-txt" onClick={() => navigate("/competitions/edit", { state: { competition: competition } })}>
                                            Edit
                                        </Button>
                                        :
                                        ""
                                    }
                                </td>
                                <td>
                                    {competition.userId === currentUser.id ? 
                                        <Button className="btn-color btn-lt-txt" onClick={() => deleteCompetition(competition)}>
                                            Delete
                                        </Button>
                                        :
                                        ""
                                    }
                                </td>
                            </tr>
    )
}