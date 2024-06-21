import { useState } from "react"
import "./Validate.css"
import { Button } from "reactstrap"
import { useNavigate } from "react-router-dom"
import { editUserAscent } from "../../services/UserServices.jsx"

export const AdminValidateTableRow = ({ ascent, allCompetitionsClimblist }) => {
    const [flagged, setFlagged] = useState(false)
    const [validated, setValidated] = useState(ascent.validated)

    const navigate = useNavigate()

    const handleValidated = (bool) => {
        if (bool === true && flagged === true) {
            const copy = {...ascent}
            copy.validated = bool
            editUserAscent(copy)
    
            setValidated(bool)

            handleFlagged(false)
        } else {
            const copy = {...ascent}
            copy.validated = bool
            editUserAscent(copy)
    
            setValidated(bool)
        }
    }

    const handleFlagged = (bool) => {
        if (validated === true) {
            setFlagged(bool)

            handleValidated(false)
        } else {
            setFlagged(bool)
        }
    }

    return (
        <tr key={ascent.id}>
            <th scope="row">
                {ascent.climbId}
            </th>
            <td>
                {(allCompetitionsClimblist.find(climb => climb.id === ascent.climbId)).name}
            </td>
            <td>
                {(allCompetitionsClimblist.find(climb => climb.id === ascent.climbId)).points}
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
                <Button className="warning" onClick={() => handleFlagged(false)}>
                    <i className="fa-solid fa-flag"></i>
                </Button>
                :
                <Button outline onClick={() => handleFlagged(true)}>
                    <i className="fa-solid fa-flag"></i>
                </Button>
                }
            </td>
            <td>
                <Button color="link" onClick={() => navigate("/validate/note", { state: { climb: ascent } })}>
                    Add Note
                </Button>
            </td>
        </tr>
    )
}