import { useEffect, useState } from "react"
import "./Validate.css"
import { Button } from "reactstrap"
import { useNavigate } from "react-router-dom"
import { editUserAscent, getCompetitionPoints, updateCompetitionPoints } from "../../services/UserServices.jsx"

export const AdminValidateTableRow = ({ ascent, allCompetitionsClimblist, userObj, competition }) => {
    const [flagged, setFlagged] = useState(ascent.flagged)
    const [validated, setValidated] = useState(ascent.validated)
    const [registrationObj, setRegistrationObj] = useState({})
    const [climb, setClimb] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        if (validated) {
            const copyAscent = {...ascent}
            copyAscent.validated = validated
            copyAscent.flagged = flagged
            editUserAscent(copyAscent)

        } else {
        const copyAscent = {...ascent}
            copyAscent.validated = validated
            copyAscent.flagged = flagged
            editUserAscent(copyAscent)

        }
    }, [validated, flagged])

    useEffect(() => {
        if (validated) {
            getCompetitionPoints(registrationObj).then(regObj => {
                console.log(regObj)
                regObj.competitionPoints += climb.points
                console.log(regObj)
                updateCompetitionPoints(regObj)
            })
        } else {
            getCompetitionPoints(registrationObj).then(regObj => {
                console.log(regObj)
                regObj.competitionPoints -= climb.points
                console.log(regObj)
                updateCompetitionPoints(regObj)
            })
        }
    }, [validated, flagged])


    useEffect(() => {
        const registration = userObj.competitionRegistrants.find(registrationObj => registrationObj.competitionId === competition.id)
        console.log(registration)
        setRegistrationObj(registration)
    }, [userObj])

    useEffect(() => {
        const climbObj = allCompetitionsClimblist.find(climb => climb.id === ascent.climbId)
        setClimb(climbObj)
    }, [ascent])

    const handleValidated = (bool) => {
        if (bool) {
            setValidated(bool)

            setFlagged(!bool)

            
        } else {
            setValidated(bool)

            setFlagged(!bool)
        }
    }

    return (
        <tr key={ascent.id}>
            <th scope="row">
                {ascent.climbId}
            </th>
            <td>
                {climb.name}
            </td>
            <td>
                {climb.points}
            </td>
            <td>
                {validated ?
                <Button className="success" onClick={() => handleValidated(false)}>
                    <i className="fa-regular fa-circle-check"></i>
                </Button>
                :
                <Button outline onClick={() => handleValidated(true)}>
                    <i className="fa-regular fa-circle-check"></i>
                </Button>
                }
            </td>
            <td>
                {flagged ?
                <Button className="warning" onClick={() => handleValidated(true)}>
                    <i className="fa-solid fa-flag"></i>
                </Button>
                :
                <Button outline onClick={() => handleValidated(false)}>
                    <i className="fa-solid fa-flag"></i>
                </Button>
                }
            </td>
            <td>
                {!ascent.notes == "" ?
                <Button color="link" onClick={() => navigate("/validate/note", { state: { climb: ascent } })}>
                    Edit Note
                </Button>
                :
                <Button color="link" onClick={() => navigate("/validate/note", { state: { climb: ascent } })}>
                    Add Note
                </Button>
                }
            </td>
        </tr>
    )
}