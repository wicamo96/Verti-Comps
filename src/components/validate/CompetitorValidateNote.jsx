import { useLocation } from "react-router-dom"
import { Card } from "reactstrap"

export const CompetitorValidateNote = () => {

    const { state } = useLocation()

    return (
        <article className="noteBody">
            <Card className="card">
            <h2 className="TextDark margin">View Note</h2>
            <input 
                type="text"
                size="50"
                value={state.foundClimbObj.notes}
                className="form-control"
            ></input>
            </Card>
        </article>
    )
}