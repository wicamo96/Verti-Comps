import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getCompetitorListByCompId } from "../../services/UserServices.jsx"
import { Table } from "reactstrap"

export const CompetitorCompetitionDetails = ({ currentUser }) => {
    const { state } = useLocation()
    const [competitorList, setCompetitorList] = useState([])
    const [competitionLeaderboard, setCompetitionLeaderboard] = useState([])
    const [sortedCompetitionLeaderboard, setSortedCompetitionLeaderboard] = useState([])

    useEffect(() => {
        getCompetitorListByCompId(state.competition.id).then(registrationArr => {
            setCompetitorList(registrationArr)
        })
    }, [])

    useEffect(() => {
        const sortedList = competitorList.sort((a, b) => b.competitionPoints - a.competitionPoints)
        setCompetitionLeaderboard(sortedList)
    }, [competitorList])

    useEffect(() => {
        const arr = []
        let counter = 1
        for (const item of competitionLeaderboard) {
            const copy = {
                rank: counter,
                name: item.user.name,
                points: item.competitionPoints,
                userId: item.userId
            }
            arr.push(copy)
            counter++
        }
        setSortedCompetitionLeaderboard(arr)
    }, [competitionLeaderboard])

    return (
        <>
            <h2 className="textDark margin">{state.competition.name} Details</h2>
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
                    sortedCompetitionLeaderboard.map(obj => {
                        return (
                            <tr key={obj.id}>
                                <th className={obj.userId === currentUser.id ? "textDark grayBackground" : "textDark"}>
                                    {obj.rank}
                                </th>
                                <th className="textDark">
                                    {obj.name}
                                </th>
                                <th className="textDark">
                                    {obj.points}
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