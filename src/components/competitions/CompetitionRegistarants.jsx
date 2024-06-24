import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { deregisterCompetitor, getCompetitors } from "../../services/UserServices.jsx"
import { Button, Table } from "reactstrap"

export const CompetitionRegistrants = () => {
    const [competitorList, setCompetitorList] = useState([])
    const [filteredCompetitorList, setFilteredCompetitorList] = useState([])
    const [filteredRegistrationList, setFilteredRegistrationList] = useState([])

    const { state } = useLocation()

    const handleDeregistration = (competitor) => {
        const registrationInfo = filteredRegistrationList.find(registration => registration.userId === competitor.id)
        deregisterCompetitor(registrationInfo)
        getAndSetCompetitorList()
    }

    const getAndSetCompetitorList = () => {
        const arr = []
        const registrationArr = []
        competitorList.map(competitor => {
            for (const registration of competitor.competitionRegistrants) {
                if (registration.competitionId === state.competition.id) {
                    arr.push(competitor)
                    registrationArr.push(registration)
                }
            }
        })
        setFilteredCompetitorList(arr)
        setFilteredRegistrationList(registrationArr)
    }

    useEffect(() => {
        getCompetitors().then(competitorArr => {
            setCompetitorList(competitorArr)
        })
    }, [])

    useEffect(() => {
        getAndSetCompetitorList()
    }, [competitorList])

    return (
        <article className="wider">
            <h2 className="margin">{state.competition.name} Registration List</h2>
            <Table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                        
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCompetitorList.map(competitor => {
                        return (
                            <tr key={competitor.id}>
                                <th scope="row">
                                    {competitor.name}
                                </th>
                                <td>
                                    <Button onClick={() => handleDeregistration(competitor)}>
                                        Deregister
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </article>
    )
}