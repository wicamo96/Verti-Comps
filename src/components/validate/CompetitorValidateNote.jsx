import { useLocation } from "react-router-dom"

export const CompetitorValidateNote = () => {

    const { state } = useLocation()

    return (
        <article>
            <h2>View Note</h2>
            <input 
                type="text"
                size="50"
                value={state.foundClimbObj.notes}
                className="form-control"
            ></input>
        </article>
    )
}