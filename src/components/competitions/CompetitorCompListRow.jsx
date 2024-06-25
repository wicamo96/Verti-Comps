import { useEffect, useState } from "react"
import { Button } from "reactstrap"
import { deregisterCompetitor, registerCompetitor } from "../../services/UserServices.jsx"
import { getCompetitionList } from "../../services/CompetitionServices.jsx"


export const CompetitorCompListRow = ({ currentUser, competition, formattedDate, competitorRegistrationList, setCompetitionList }) => {
    const [competitionRegistrationStatus, setCompetitorRegistrationStatus] = useState([])

     useEffect(() => {
        const registration = competitorRegistrationList?.find(registrationObj => registrationObj.competitionId === competition.id)
        setCompetitorRegistrationStatus(registration)
     }, [competitorRegistrationList])

    const handleDeregistration = () => {
       deregisterCompetitor(competitionRegistrationStatus).then(getCompetitionList().then(compListArr => {
        setCompetitionList(compListArr)
    }))
    }

    const handleRegistration = () => {
        const registrationObj = {
            userId: currentUser.id,
            competitionId: competition.id,
            competitionPoints: 0
        }
        registerCompetitor(registrationObj).then(getCompetitionList().then(compListArr => {
            setCompetitionList(compListArr)
        }))
    }


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
            <td>
                {competitionRegistrationStatus?.id ?
                <Button color="primary" onClick={() => handleDeregistration()}>
                    Deregister
                </Button>
                :
                <Button color="primary" onClick={() => handleRegistration()}>
                    Register
                </Button>
                }
            </td>
        </tr>
    )
}