import { useState } from "react"
import "./Create.css"
import { postNewCompetition } from "../../services/CompetitionServices.jsx"
import { useNavigate } from "react-router-dom"

export const Create = ({ currentUser }) => {
    const [competitionInfo, setCompetitionInfo] = useState({})

    const navigate = useNavigate()

    const handleCompetitionSubmit = () => {
        const copy = {...competitionInfo}
        copy.userId = currentUser.id
        postNewCompetition(copy)
        navigate('/create/climbList')
    }

    return (
        <article className="createContainer">
            <form>
                <h2 className="marginBottom">Create New Competition</h2>
                <fieldset>
                    <div>
                        <h4>Enter Competition Name</h4>
                        <input
                        type="text"
                        id="name"
                        className="createInput"
                        placeholder="Name"
                        required
                        autoFocus
                        onChange={(event) => {
                            const copy = {...competitionInfo}
                            copy.name = event.target.value
                            setCompetitionInfo(copy)
                        }}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <h4>Enter Date</h4>
                        <input
                        type="date"
                        id="date"
                        className="createInput"
                        placeholder="Enter competition date"
                        required
                        onChange={(event) => {
                            const copy = {...competitionInfo}
                            copy.date = event.target.value
                            setCompetitionInfo(copy)
                        }}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <h4>Enter Location</h4>
                        <input
                        type="text"
                        id="location"
                        className="createInput"
                        placeholder="Location"
                        required
                        onChange={(event) => {
                            const copy = {...competitionInfo}
                            copy.location = event.target.value
                            setCompetitionInfo(copy)
                        }}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <h4>Enter Start Time</h4>
                        <input
                        type="time"
                        id="startTime"
                        className="createInput"
                        placeholder="Start Time"
                        required
                        onChange={(event) => {
                            const copy = {...competitionInfo}
                            copy.startTime = event.target.value
                            setCompetitionInfo(copy)
                        }}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <button className="login-btn btn-info" type="submit" onClick={() => handleCompetitionSubmit()}>
                            Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        </article>
    )
}