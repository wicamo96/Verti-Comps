import { useEffect, useState } from "react"
import "./Validate.css"
import { Button } from "reactstrap"
import { useNavigate } from "react-router-dom"
import { editUserAscent } from "../../services/UserServices.jsx"

export const AdminValidateTableRow = ({ ascent, allCompetitionsClimblist }) => {
    const [flagged, setFlagged] = useState(ascent.flagged)
    const [validated, setValidated] = useState(ascent.validated)

    const navigate = useNavigate()

    useEffect(() => {
        const copy = {...ascent}
            copy.validated = validated
            copy.flagged = flagged
            editUserAscent(copy)
    }, [flagged])

    const handleValidated = (bool) => {
        if (bool) {
            setValidated(bool)

            setFlagged(!bool)

            
        } else {
            setValidated(bool)

            setFlagged(!bool)

            // const copy = {...ascent}
            // copy.validated = validated
            // copy.flagged = flagged
            // editUserAscent(copy)
        }
    }

    // const handleValidated = (bool) => {
    //     if (bool && flagged === true) {
    //         setValidated(bool)

    //         handleFlagged(false)
    //     } else {
    //         const copy = {...ascent}
    //         copy.validated = bool
    //         editUserAscent(copy)
    
    //         setValidated(bool)
    //     }
    // }

    // const handleFlagged = (bool) => {
    //     if (bool && validated === true) {
    //         setFlagged(bool)

    //         handleValidated(false)
    //     } else {
    //         const copy = {...ascent}
    //         copy.flagged = bool
    //         editUserAscent(copy)

    //         setFlagged(bool)
    //     }
    // }

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
                <Button color="link" onClick={() => navigate("/validate/note", { state: { climb: ascent } })}>
                    Add Note
                </Button>
            </td>
        </tr>
    )
}