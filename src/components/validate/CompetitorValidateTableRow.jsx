import { useState } from "react"
import { Button } from "reactstrap"

export const CompetitorValidateTableRow = ({ climb, currentUser }) => {
    const [validated, setValidated] = useState(climb.validated)

    const handleValidated = (bool) => {
        setValidated(bool)
    }

    return (
        <tr key={climb.id}>
            <td scope="row">
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
                {/* <Button color="link" onClick={() => navigate("/validate/note", { state: { climb: ascent } })}>
                    Add Note
                </Button> */}
            </td>
        </tr>
    )
}