import { useLocation, useNavigate } from "react-router-dom"
import { postToCompetitionLeaderboard, postToLeagueLeaderboard } from "../../services/LeaderboardServices.jsx"
import { Button } from "reactstrap"
import { editExistingCompetition } from "../../services/CompetitionServices.jsx"

export const AdminCompetitionDetails = () => {
    const navigate = useNavigate()

    const { state } = useLocation()

    const handleLeaderboardAdditions = () => {
        if (state.competition.inProgress) {
            if (state.competitionLeaderboard.length > 0) {
                const obj = {...state.competition}
                obj.inProgress = !state.competition.inProgress
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
                editExistingCompetition(obj)
                navigate("/competitions")
            }
        } else {
            const obj = {...state.competition}
            obj.inProgress = !state.competition.inProgress
            editExistingCompetition(obj)
            navigate("/competitions")
        }
    }

    return (
        <>
            <h2>{state.competition.name} Details</h2>
            <section>
                {state.competition.inProgress ?
                    <Button className="btn-color btn-lt-txt" onClick={() => handleLeaderboardAdditions()}>
                        End Competition
                    </Button>
                :
                    <Button className="btn-color btn-lt-txt" onClick={() => handleLeaderboardAdditions()}>
                        Start Competition
                    </Button>
                }
            </section>
        </>
    )
}