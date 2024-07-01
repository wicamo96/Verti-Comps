import { useLocation, useNavigate } from "react-router-dom"
import { Button, Card } from "reactstrap"
import "./Validate.css"
import { useState } from "react"
import { editUserAscent } from "../../services/UserServices.jsx"

export const AdminValidateNote = () => {
    const [note, setNote] = useState("")

    const navigate = useNavigate()

    const { state } = useLocation()

    const handleAddedNote = () => {
        const newAscentObj = {
            id: state.climb.id,
            userId: state.climb.userId,
            climbId: state.climb.climbId,
            validated: false,
            flagged: true,
            notes: note
        }
        editUserAscent(newAscentObj)
        navigate("/validate")
    }

    const handleDeleteNote = () => {
        const newAscentObj = {
            id: state.climb.id,
            userId: state.climb.userId,
            climbId: state.climb.climbId,
            validated: state.climb.validated,
            flagged: false,
            notes: ""
        }
        editUserAscent(newAscentObj)
        navigate("/validate")
    }
    

    return (
        <article className="noteBody">
            <Card className="card">
                <h2 className="textDark">Add Note</h2>
                <input 
                    type="text"
                    size="50"
                    placeholder="Add Note About Selected Climb"
                    defaultValue={state.climb.notes}
                    onChange={
                        (event) => 
                        setNote(event.target.value)
                    }
                    className="form-control margin"
                ></input>
                <div className="buttonGroup">
                    <Button className="btn-color" onClick={() => handleAddedNote()}>
                        Add Note
                    </Button>
                    <Button className="btn-color" onClick={() => handleDeleteNote()}>
                        Delete Note
                    </Button>
                </div>
            </Card>
        </article>
    )
}