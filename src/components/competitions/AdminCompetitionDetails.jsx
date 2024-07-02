import { useLocation, useNavigate } from "react-router-dom"
import { postToCompetitionLeaderboard, postToLeagueLeaderboard } from "../../services/LeaderboardServices.jsx"
import { Button, Table } from "reactstrap"
import { editExistingCompetition } from "../../services/CompetitionServices.jsx"
import { useEffect, useState } from "react"

export const AdminCompetitionDetails = () => {
    const [competitionRegistration, setCompetitionRegistration] = useState([])
    const [competitionLeaderboard, setCompetitionLeaderboard] = useState([])
    const [competitionLeaderboardAndNames, setCompetitionLeaderboardAndNames] = useState([])

    const navigate = useNavigate()

    const { state } = useLocation()

    useEffect(() => {
        setCompetitionRegistration(state.competitionRegistrants)
    }, [])

    useEffect(() => {
        const sortedList = competitionRegistration.sort((a, b) => b.competitionPoints - a.competitionPoints)
        setCompetitionLeaderboard(sortedList)
    }, [competitionRegistration])

    useEffect(() => {
        const arr = []
        for (const item of competitionLeaderboard) {
            const userObj = state.leagueLeaderboard.find(entry => entry.userId === item.userId)
            item.name = userObj?.user.name
            arr.push(item)
        }
        setCompetitionLeaderboardAndNames(arr)
    }, [competitionLeaderboard])

    const handleLeaderboardAdditions = (bool) => {
        if (bool) {
            if (state.competitionLeaderboard.length > 0) {
                const obj = {...state.competition}
                obj.inProgress = !state.competition.inProgress
                obj.hasStarted = true
                editExistingCompetition(obj)
                navigate("/competitions")
            } else {
                for (const registrant of state.competitionRegistrants) {
                    const competitor = state.leagueLeaderboard.find(entryObj => entryObj.userId === registrant.userId)
                    if (competitor) {
                        const compLeaderboardObj = {
                            userId: registrant.userId,
                            competitionId: state.competition.id
                        }
                        postToCompetitionLeaderboard(compLeaderboardObj)
                    } else {
                        const leagueLeaderboardObj = {
                            userId: registrant.userId
                        }
                        postToLeagueLeaderboard(leagueLeaderboardObj)

                        const competitionLeaderboardObj = {
                            userId: registrant.userId,
                            competitionId: state.competition.id
                        }
                        postToCompetitionLeaderboard(competitionLeaderboardObj)
                    }
                }
                const obj = {...state.competition}
                obj.inProgress = !state.competition.inProgress
                obj.hasStarted = true
                editExistingCompetition(obj)
                navigate("/competitions")
            }
        } else {
            const obj = {...state.competition}
            obj.inProgress = !state.competition.inProgress
            obj.hasStarted = true
            editExistingCompetition(obj)
            navigate("/competitions")
        }
    }

    return (
        <>
            <h2 className="textDark margin">{state.competition.name} Details</h2>
            <section>
                {state.competition.inProgress ?
                    <Button className="btn-color btn-lt-txt margin" onClick={() => handleLeaderboardAdditions(false)}>
                        End Competition
                    </Button>
                :
                    <Button className="btn-color btn-lt-tx margin" onClick={() => handleLeaderboardAdditions(true)}>
                        Start Competition
                    </Button>
                }
            </section>
            <Table className="margin">
                <thead>
                    <tr>
                        <th className="textDark">
                            Rank
                        </th>
                        <th className="textDark">
                            Name
                        </th>
                        <th className="textDark">
                            Points
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {state.competition.hasStarted ?
                    competitionLeaderboardAndNames.map(obj => {
                        return (
                            <tr key={obj.id}>
                                <th className="textDark">
                                    {obj.id}
                                </th>
                                <th className="textDark">
                                    {obj.name}
                                </th>
                                <th className="textDark">
                                    {obj.competitionPoints}
                                </th>
                            </tr>
                        )
                    })
                    :
                        ""
                    }
                </tbody>
            </Table>
        </>
    )
}