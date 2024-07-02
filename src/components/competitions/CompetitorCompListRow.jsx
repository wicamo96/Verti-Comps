import { useEffect, useState } from "react"
import { Button } from "reactstrap"
import { deregisterCompetitor, registerCompetitor } from "../../services/UserServices.jsx"
import { getCompetitionList } from "../../services/CompetitionServices.jsx"
import { useNavigate } from "react-router-dom"


export const CompetitorCompListRow = ({ currentUser, competition, formattedDate, competitorRegistrationList, setCompetitionList }) => {
    const [competitionRegistrationStatus, setCompetitorRegistrationStatus] = useState([])

    const navigate = useNavigate()

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
            <th scope="row" className="textDark">
                <Button className="btn-color btn-lt-txt" onClick={() => navigate("/competitions/details", { state: { competition: competition, competitorRegistrationList: competitorRegistrationList }})}>
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
                {competitionRegistrationStatus?.id ?
                <Button className="btn-color btn-lt-txt" color="primary" onClick={() => handleDeregistration()}>
                    Deregister
                </Button>
                :
                <Button className="btn-color btn-lt-txt" color="primary" onClick={() => handleRegistration()}>
                    Register
                </Button>
                }
            </td>
        </tr>
    )
}