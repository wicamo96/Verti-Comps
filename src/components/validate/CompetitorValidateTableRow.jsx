import { useEffect, useState } from "react"
import { Button } from "reactstrap"
import { addUserAscent, deleteUserAscent, findUserClimb } from "../../services/UserServices.jsx"
import { useNavigate } from "react-router-dom"

export const CompetitorValidateTableRow = ({ climb, currentUser }) => {
    const [validated, setValidated] = useState(false)
    const [findClimb, setFindClimb] = useState(false)
    const [foundClimbObj, setFoundClimbObj] = useState({})

    const navigate = useNavigate()

    const handleValidated = (bool) => {
        setValidated(bool)
      
        if (bool === true) {
            const climbObj = {
                userId: currentUser.id,
                climbId: climb.id,
                validated: false,
                notes: ""
            }
            addUserAscent(climbObj)
        } else {
            deleteUserAscent(climb, currentUser.id)
        }
    }

    useEffect(() => {
        findUserClimb(climb.id, currentUser.id).then(climbArr => {
            setFoundClimbObj(climbArr[0])
            if (climbArr.length > 0) {
                setFindClimb(true)
            } else {
                setFindClimb(false)
            }
        })
    }, [])

    useEffect(() => {
        setValidated(findClimb)
    }, [findClimb])

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
                {foundClimbObj?.notes ?
                <Button color="link" onClick={() => navigate("/validate/note", { state: { foundClimbObj: foundClimbObj } })}>
                    View Note
                </Button>
                :
                ""
                }
            </td>
        </tr>
    )
}