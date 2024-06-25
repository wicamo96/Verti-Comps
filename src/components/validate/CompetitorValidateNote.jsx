import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Button } from "reactstrap"

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